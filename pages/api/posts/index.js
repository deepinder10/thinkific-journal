import { createPost, fetchPosts } from '@/prisma/helpers/post';
import { getUserInfoFromJWT } from '@/helpers/middleware';
import semanticAnalyser from 'helpers/sentiment-analyser';

// GET /api/posts

const putIntoJournal = async (req, user) => {
  const { title, content } = JSON.parse(req.body);
  if (!title || !content) {
    throw new Error('Title/content is required');
  }
  const sentiment = Math.floor(await semanticAnalyser(content));
  const post = await createPost({
    title,
    content,
    sentiment,
    authorId: user.id,
  });
  return post;
};

export default async (req, res) => {
  if (req.method === 'GET') {
    const posts = await fetchPosts();
    res.json(posts);
  } else if (req.method === 'POST') {
    const user = await getUserInfoFromJWT(req);
    const post = await putIntoJournal(req, user);
    res.json(post);
  }
};
