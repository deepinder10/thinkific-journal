import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from './CreatePostPopup.module.scss';
import CrossIcon from '@/icons/cross.svg';
import SpinnerIcon from '@/icons/spinner.svg';
export default function CreatePostPopup({ submitPostForm, onClose }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [values, setValues] = useState({
    title: '',
    content: '',
  });

  const handleTitleChange = (event) => {
    setValues({ ...values, title: event.target.value });
  };

  const handleContentChange = (event) => {
    setValues({ ...values, content: event.target.value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    submitPostForm(values);
    setLoading(true);
  };

  return (
    <>
      <Modal
        title="createPostHeader"
        description="Write title and content to create a post"
        onClose={onClose}>
        <div className={styles.popup} data-testid="create-post-popup">
          <div className={styles.popup__header}>
            <h3 id="createPostHeader">Create Post</h3>
            <button
              type="button"
              data-testid="popup-close-btn"
              className={styles['no-style-btn']}
              onClick={onClose}
              aria-label="Close">
              <CrossIcon className={styles.popup__header__icon} />
            </button>
          </div>
          <form className={styles.popup__form} onSubmit={onFormSubmit}>
            <label htmlFor="title" className={styles.popup__label}>
              Title
            </label>
            <input
              id="title"
              name="title"
              placeholder="Enter Title"
              type="text"
              required={true}
              aria-required="true"
              className={styles.popup__title}
              onChange={handleTitleChange}
              disabled={loading}
            />
            <label htmlFor="content" className={styles.popup__label}>
              Content
            </label>
            <textarea
              id="content"
              name="content"
              className={styles.popup__textarea}
              placeholder="Enter content of message"
              required={true}
              aria-required="true"
              rows="9"
              cols="40"
              onChange={handleContentChange}
              disabled={loading}
            />
            <button
              type="submit"
              id="postSubmitBtn"
              aria-label="Submit"
              className={styles.popup__btn}
              disabled={loading}>
              {loading ? <SpinnerIcon /> : null}&nbsp;Submit
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

CreatePostPopup.propTypes = {
  onClose: PropTypes.func,
  submitPostForm: PropTypes.func,
};
