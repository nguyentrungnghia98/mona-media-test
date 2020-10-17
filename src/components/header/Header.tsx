import { DEFAULT_IMAGE } from 'constants/common';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavItem,
  UncontrolledDropdown
} from 'reactstrap';
import './Header.scss';
import HeaderMessages from './headerMessages/HeaderMessages';
import HeaderNotification from './headerNotification/HeaderNotification';

const Header: React.FC = () => {
  return (
    <Navbar light expand="xs" className="navbar-multi-collapse">
      <Container className="navbar-container" fluid>
        <Nav navbar>
          <NavItem className="d-none d-sm-block">
            <Link to="/" className="nav-logo">
              <div className="nav-logo__circles">
                <div className="logo-circle1" />
                <div className="logo-circle2" />
              </div>
              <h4 className="nav-logo__text">5starguides</h4>
            </Link>
          </NavItem>
          <NavItem className="d-block d-sm-none">
            <i className="fa fa-bars fa-fw" />
          </NavItem>
          <NavItem className="d-none d-lg-block">
            <div className="nav-search">
              <i className="fa fa-search" />
              <input placeholder="Bất cứ đâu - Trải nghiệm" />
            </div>
          </NavItem>
        </Nav>
        <Nav navbar className="nav-right">
          <UncontrolledDropdown nav inNavbar className="d-none d-sm-flex">
            <DropdownToggle nav caret>
              Khám phá
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Unknown</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem className="d-none d-sm-flex">
            <Link to="#">Về chúng tôi</Link>
          </NavItem>
          <NavItem className="d-none d-sm-flex">
            <Link to="#">Blog</Link>
          </NavItem>
          <HeaderMessages />
          <HeaderNotification />
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <div className="nav-profile dropdown-toggle">
                <img
                  onError={(e: any) => {
                    e.target.src = DEFAULT_IMAGE;
                  }}
                  src="https://i.imgur.com/hBCFHCH.png"
                  alt="avatar_login"
                />
                <span>Tùng sơn</span>
              </div>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Unknown</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
