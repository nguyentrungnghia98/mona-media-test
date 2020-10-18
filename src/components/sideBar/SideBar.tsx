import React from 'react';
import CircleProgress from './circleProgress/CircleProgress';
import './SideBar.scss';
import { DEFAULT_IMAGE } from '../../constants/common';
import {
  IconCamera,
  IconEditUser,
  IconGlobal,
  IconLocation,
  IconLocationAdd,
  IconLock,
  IconLogout
} from 'components/icons';
import { SideBarMenuItem } from './SideBar.d';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const selectCollapsed = (state: RootState) => state.sideBar.collapsed;

const SideBar = () => {
  const collapsed = useSelector(selectCollapsed);
  const progress = 75;
  const menuItems: SideBarMenuItem[] = [
    {
      menuItemName: 'Yêu cầu cộng đồng',
      icon: IconGlobal,
      to: '/',
      count: 4,
      isPrimary: true
    },
    {
      title: 'Quản lí tài khoản',
      subMenus: [
        {
          menuItemName: 'Cập nhật hồ sơ',
          icon: IconEditUser,
          to: '/manage-profile',
          count: 3,
          isPrimary: true
        },
        {
          menuItemName: 'Đổi mật khẩu',
          icon: IconLock,
          to: '/'
        },
        {
          menuItemName: 'Đăng xuất',
          icon: IconLogout,
          to: '/'
        }
      ]
    },
    {
      title: 'Quản lí Tour',
      subMenus: [
        {
          menuItemName: 'Thêm Tour',
          icon: IconLocationAdd,
          to: '/create-tour'
        },
        {
          menuItemName: 'Quản lí Tour',
          icon: IconLocation,
          to: '/manage-tour',
          count: 4
        }
      ]
    },
    {
      title: 'Quản lí bài viết',
      subMenus: [
        {
          menuItemName: 'Thêm bài viết',
          icon: IconLocationAdd,
          to: '/'
        },
        {
          menuItemName: 'Quản lí bài viết',
          icon: IconLocation,
          to: '/',
          count: 4
        }
      ]
    }
  ];

  const renderMenuItem = (menuItem: SideBarMenuItem) => {
    const { menuItemName, icon: Icon, to, count, isPrimary } = menuItem;
    return (
      <Link to={to!} className="menu-item__content">
        <div className="menu-item__icon">
          <Icon />
        </div>
        <div className="menu-item__text">{menuItemName}</div>
        {count && (
          <div
            className={classNames('menu-item__count', {
              'menu-item__count--primary': isPrimary
            })}
          >
            <span>{count}</span>
          </div>
        )}
      </Link>
    );
  };

  return (
    <div
      className={classNames('left-sidebar', {
        'sidebar--enable': collapsed
      })}
    >
      <div className="user-profile">
        <div className="user-profile__left">
          <CircleProgress progress={progress} total={100} />
          <img
            className="profile-avatar"
            src="https://i.imgur.com/8x0mPwd.png"
            onError={(e: any) => (e.src.target = DEFAULT_IMAGE)}
            alt="user-profile"
          />
          <div className="profile-upload">
            <IconCamera />
          </div>
        </div>
        <div className="user-profile__right">
          <h4 className="user-profile__welcome">Xin chào, Maria!</h4>
          <p className="user-profile__description">
            Bạn đã hoàn thành <b>{progress}%</b> hồ sơ, Hãy tiếp tục!
          </p>
        </div>
      </div>
      <Scrollbars
        style={{ width: 'auto', height: 'calc(100vh - 172px' }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <ul className="menu-items">
          {menuItems.map((menuItem, index) => {
            const { subMenus, title } = menuItem;
            const haveSubMenus = subMenus && subMenus.length > 0;
            return (
              <li className="menu-item" key={index}>
                {haveSubMenus ? (
                  <>
                    <p className="menu-item__title">{title}</p>
                    <ul className="sub-menu-items">
                      {subMenus!.map((subMenu, subMenuIndex) => (
                        <li className="menu-item" key={subMenuIndex}>
                          {renderMenuItem(subMenu)}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  renderMenuItem(menuItem)
                )}
              </li>
            );
          })}
        </ul>
      </Scrollbars>
    </div>
  );
};

export default SideBar;
