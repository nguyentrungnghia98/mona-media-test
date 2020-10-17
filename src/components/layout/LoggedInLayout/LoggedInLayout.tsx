import React from 'react';
import Header from 'components/header/Header';

const LoggedInLayout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default LoggedInLayout;
