import { Header } from '@/components/Header/Header';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
