/**
 * @description：路由配置文件
 */
import React from 'react';
import { cloneDeep } from 'lodash-es';
import NotFoundContainer from '@src/pages/404/NotFound';
import HomeContainer from '@src/pages/home/Home';

function LazyElement(props: any) {
  const { importFunc } = props;
  const LazyComponent = React.lazy(importFunc);

  return (
    <React.Suspense fallback={'loading...'}>
      <LazyComponent />
    </React.Suspense>
  );
}

// 处理 routes 如果 element 是懒加载，要包裹 Suspense
function dealRoutes(routesArr) {
  if (!Array.isArray(routesArr) || !routesArr.length) {
    return [];
  }

  const clonedArr = cloneDeep(routesArr);
  clonedArr.forEach((route) => {
    const { component } = route;
    route.element = component;

    if (typeof component == 'function') {
      route.element = <LazyElement importFunc={component} />;
    }

    delete route.component;

    if (route.children) {
      route.children = dealRoutes(route.children);
    }
  });

  return clonedArr;
}

// 原始路由配置
export const rawRoutesConfig = [
  {
    path: '/',
    component: () => import('@src/App'),
    children: [
      // 一旦解开下面的注释代码，默认路由就会优先渲染 register，布局路由里设置的默认路由就会失效
      // {
      //   index: true,
      //   component: () => import('@src/pages/register/Register'),
      // },
      {
        component: () => import('@src/components/common-layout/CommonLayout'),
        children: [
          {
            // index route 不能有 children、path 属性
            // 在布局路由下的子路由，想要设置为默认路由，必须在布局路由下配置，不能跳出布局路由外单独设置，否则只会渲染子路由内容，布局路由不会渲染出来
            index: true,
            component: <HomeContainer />,
          },
          {
            path: 'home',
            component: <HomeContainer />,
          },
          {
            path: 'user',
            component: () => import('@src/pages/user/User'),
          },
        ],
      },
      {
        path: 'register',
        component: () => import('@src/pages/register/Register'),
      },
      {
        path: 'login',
        component: () => import('@src/pages/login/Login'),
      },
    ],
  },

  {
    path: '*',
    component: <NotFoundContainer />,
  },
];

export const routesConfig = dealRoutes(rawRoutesConfig);
