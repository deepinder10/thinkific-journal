import PropTypes from 'prop-types';

export const AuthorShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  email: PropTypes.string,
  name: PropTypes.string.isRequired,
});
