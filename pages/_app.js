import PropTypes from 'prop-types';
import { useEffect } from 'react';
import '../styles/global.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = 'en-us';
    document.documentElement.lang = 'en-us';
  });
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};
