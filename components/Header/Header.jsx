import { useState } from 'react';
import CreatePostBtn from '../CreatePostBtn/CreatePostBtn';
import CreatePostPopup from '../CreatePostPopup/CreatePostPopup';
import { sendCreatePostRequest } from '@/helpers/posts-endpoints';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

export const Header = () => {
  const router = useRouter();
  const [openPopup, setPopup] = useState(false);

  const submitPostForm = async (body) => {
    await sendCreatePostRequest(body);
    setPopup(false);
    router.replace(router.asPath);
  };

  const openCreatePostPopup = () => {
    setPopup(true);
  };
  return (
    <header className={styles.header}>
      <CreatePostBtn openPostModal={openCreatePostPopup} />
      {openPopup ? (
        <CreatePostPopup
          submitPostForm={submitPostForm}
          onClose={() => setPopup(false)}
        />
      ) : null}
    </header>
  );
};
