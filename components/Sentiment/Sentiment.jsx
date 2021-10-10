import PropTypes from 'prop-types';
import styles from './Sentiment.module.scss';

const findSentimentString = (number) => {
  if (number < 0) {
    return 'negative';
  } else if (number > 0) {
    return 'positive';
  } else {
    return 'neutral';
  }
};
export const Sentiment = ({ sentimentInt = 0 }) => {
  const sentiment = findSentimentString(sentimentInt);
  return (
    <span
      className={`${styles.sentiment} ${styles[sentiment]}`}
      data-testid="sentiment-colored-text">
      {sentiment}
    </span>
  );
};

Sentiment.propTypes = {
  sentimentInt: PropTypes.number,
};
