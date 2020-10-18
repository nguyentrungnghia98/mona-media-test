import React from 'react';
import Header from 'components/header/Header';
import SideBar from 'components/sideBar/SideBar';
import './LoggedInLayout.scss';

const LoggedInLayout: React.FC = ({ children }) => (
  <>
    <div className="wrapper">
      <Header />
      <SideBar />
      <div className="wrapper__content">{children}</div>
    </div>
  </>
);

export default LoggedInLayout;
