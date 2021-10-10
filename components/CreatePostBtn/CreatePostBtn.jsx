import PropTypes from 'prop-types';
import styles from './CreatePostBtn.module.scss';
import AddIcon from '@/icons/add.svg';

export default function CreatePostBtn({ openPostModal }) {
  return (
    <button
      data-testid="create-post-btn"
      className={styles.btn}
      onClick={openPostModal}>
      <AddIcon />
      Create Post
    </button>
  );
}

CreatePostBtn.propTypes = {
  openPostModal: PropTypes.func,
};
