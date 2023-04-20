import styles from './common-layout.module.less';

import { Menu } from 'antd';
import React, { useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

const menuItems = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Navigation Two',
    key: 'navigation-two',
    children: [
      {
        label: 'Option 2-1',
        key: 'option-one',
      },
      {
        label: 'Option 2-2',
        key: 'option-two',
      },
      {
        label: 'Option 2-3',
        key: 'option-three',
      },
    ],
  },
  {
    label: 'User',
    key: 'user',
  },
];

function findTargetMenuItemByPathname(menuItems = []) {
  if (!menuItems.length) {
    return;
  }
  let target = [];
  menuItems.forEach((item) => {
    const { key, children = [] } = item;
    // 如果当前路由菜单的 key 在路由中找不到，则直接退出
    if (location.pathname.indexOf(`/${key}`) === -1) {
      return;
    }
    target.push(item.key);

    const res = findTargetMenuItemByPathname(children);
    if (res && res.length) {
      target = target.concat(res);
    }
  });
  return target;
}

function getFullPath(menuItem) {
  if (!menuItem || !menuItem.key) {
    return;
  }
  const { key, children = [] } = menuItem;
  let arr = [key];
  const res = getFullPath(children[0]);
  if (res) {
    arr = arr.concat(res);
  }
  return arr;
}

const CommonLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultOpenKeys = menuItems.map((item) => item.key);

  const defaultSelectedKeys = useMemo(() => {
    if (!location.pathname) {
      return [];
    }
    if (location.pathname === '/') {
      // 默认 menuItems 第一个菜单项为首页路由
      return getFullPath(menuItems[0]);
    }

    return findTargetMenuItemByPathname(menuItems).reverse();
  }, [location, menuItems]);

  const handleMenuClick = ({ keyPath }) => {
    const path = keyPath.reverse().join('/');
    navigate(path);
  };

  return (
    <div className={`${styles.commonLayout}`}>
      <Menu
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={defaultSelectedKeys}
        items={menuItems}
        style={{ width: 200, height: '100%' }}
        mode="inline"
        onClick={handleMenuClick}
      />
      <div className={styles.contentArea}>
        <Outlet />
      </div>
    </div>
  );
};

export default CommonLayout;
