import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import Header from './Header';
import Footer from './Footer';
import '../assets/styles/components/Layout.scss';

const Layout = withRouter(({ children, location }) => {
  const isHome = location.pathname === '/';
  const appStyle = classNames('app', { isHome });
  return (
    <div className={appStyle}>
      <Header />
      {children}
      <Footer />
    </div>
  );
});

export default Layout;
