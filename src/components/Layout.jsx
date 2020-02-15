import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../assets/styles/components/NotFound.scss';

const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
