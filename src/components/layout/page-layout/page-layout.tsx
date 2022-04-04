import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const PageLayout: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};

export default PageLayout;
