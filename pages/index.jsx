import PropTypes from 'prop-types';
import { PostShape } from '../prop-shapes/post';
import * as cookie from 'cookie';
import Posts from '@/components/Posts/Posts';
import { generateAnonymousUser } from '@/helpers/auth-endpoints';
import { fetchPostsFromServer } from '@/helpers/posts-endpoints';
import { Layout } from '@/components/Layout/Layout';
import Head from 'next/head';

const generateJWTForUser = async () => {
  const { token } = await generateAnonymousUser();
  return token;
};

const setJWTCookieInResponse = (context, token) => {
  context.res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', token, {
      httpOnly: true,
      secure: process.env.MODE_ENV !== 'development',
      maxAge: 60 * 60 * 24 * 31,
      sameSite: 'Strict',
      path: '/',
    })
  );
};

const Journal = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Journal App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Multi User Anonymous Journal App" />
      </Head>
      <Layout>
        <Posts posts={posts} />
      </Layout>
    </>
  );
};

Journal.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

export const getServerSideProps = async (context) => {
  const parsedCookies = cookie.parse(context.req.headers.cookie || '');

  if (!parsedCookies.token) {
    const token = await generateJWTForUser();
    setJWTCookieInResponse(context, token);
  }
  return {
    props: {
      posts: await fetchPostsFromServer(),
    },
  };
};

export default Journal;
