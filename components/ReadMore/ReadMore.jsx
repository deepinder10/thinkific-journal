import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './ReadMore.module.scss';

export const ReadMore = ({ text }) => {
  const [readMoreVisible, setReadMoreVisibility] = useState(false);
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  useEffect(() => {
    if (text.length > 200) {
      setReadMoreVisibility(true);
    }
  }, []);

  const toggleReadMore = () => {
    setReadMoreOpen((prev) => !prev);
  };

  const textEllipsize = () => {
    return readMoreVisible && !readMoreOpen ? '...' : '';
  };

  return (
    <div>
      <span data-testid="read-more-text">
        {text.slice(0, !readMoreOpen ? 200 : text.length) + textEllipsize()}
      </span>
      {readMoreVisible ? (
        <button
          data-testid="read-more-btn"
          className={styles['readmore-btn']}
          onClick={toggleReadMore}>
          Read {readMoreOpen ? 'Less' : 'More'}
        </button>
      ) : null}
    </div>
  );
};

ReadMore.propTypes = {
  text: PropTypes.string.isRequired,
};
