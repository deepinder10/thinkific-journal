import { ReadMore } from '@/components/ReadMore/ReadMore';
import { Sentiment } from '@/components/Sentiment/Sentiment';
import PropTypes from 'prop-types';
import styles from './Posts.module.scss';

export default function Posts({ posts }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <ul className={styles.posts} data-testid="posts-container">
      {posts.map((post) => {
        return (
          <li
            key={post.id}
            className={styles.posts__post}
            data-testid="post-div">
            <div className={styles.posts__post__header}>
              <span className={styles.posts__post__author}>
                {post.author.name}
              </span>
              <span className={styles.posts__post__date}>
                {formatDate(post.createdAt)}
              </span>
            </div>
            <h3 className={styles.posts__post__title}>{post.title}</h3>
            <ReadMore text={post.content} />
            <Sentiment sentimentInt={post.sentiment} />
          </li>
        );
      })}
      {posts.length === 0 && (
        <p className={styles['no-posts']} data-testid="no-post-text">
          No posts found.
        </p>
      )}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array,
};
