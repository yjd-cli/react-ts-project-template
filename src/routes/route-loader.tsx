/**
 * @author：姚嘉东
 * @description：路由转换器
 * @date：2020/3/17
 */

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RouteConfigDeclaration } from '@routes/routes-config';

/**
 default: "模块内容"
 __esModule: true
 */
// 如果说引入的是一个 esModule 的话，
// 它会有一个 __esModule=true 的键值对——表示 ES6 模块；
// 有一个 default: "模块内容" 的键值对——表示 该模块的内容

/**
 * 渲染所有的路由（普通路由+重定向路由）
 * @param routesConfig
 * @param extraProps
 */
export function renderAllRoutes(routesConfig: RouteConfigDeclaration[], extraProps: any = {}) {
    let routes = renderRoutes(routesConfig, extraProps);
    let redirect = renderRedirectRoute(routesConfig);
    return [...routes, redirect];
}

/**
 * 渲染普通路由
 * @param routesConfig
 * @param extraProps
 */
export function renderRoutes(routesConfig: RouteConfigDeclaration[], extraProps: any = {}) {
    return routesConfig.map((item, index) => {
        const {
            path,
            exact,
            isProtected,
            isDynamic,
            component: Component,
            routes = [],
            loadingFallback,
        } = item;
        /*if (isRedirect) {
            // 看 Switch 的源码，就知道为什么这里不能这样写了
            // Switch 里面只能放 Route ，不能放别的，哪怕是 React.Fragment
            return (<React.Fragment key={path} path={path} exact={exact}>
                <Route
                    key={path}
                    path={path}
                    exact={exact}
                    render={props => {
                        return <Component {...props} {...extraProps} routes={routes}/>;
                    }}
                />
                <Redirect key={path + 'redirect'} to={path}/>
            </React.Fragment>);
        }*/
        return (
            <Route
                key={path}
                path={path}
                exact={exact}
                component={props => {
                    if (isProtected && !localStorage.getItem('token')) {
                        return <Redirect key={'login-redirect'} to={'/login'} />;
                    }
                    if (isDynamic) {
                        return (
                            <React.Suspense fallback={loadingFallback || '正在加载中...'}>
                                <Component {...props} {...extraProps} routes={routes} />
                            </React.Suspense>
                        );
                    }
                    return <Component {...props} {...extraProps} routes={routes} />;
                }}
            />
        );
    });
}

/**
 * 渲染重定向路由
 * @param routes
 */
export function renderRedirectRoute(routes: RouteConfigDeclaration[]) {
    let { path } = routes.find(route => route.isRedirect) || routes[0];
    return <Redirect key={path + '-redirect'} to={path} />;
}
