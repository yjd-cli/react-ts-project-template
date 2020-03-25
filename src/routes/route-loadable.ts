import React from 'react';

/**
 * @author：姚嘉东
 * @description：路由懒加载工具函数
 * @date：2020/3/17
 */

/**
 * 路由懒加载工具函数
 * @param routePath 路由路径
 */
export function routeLoadable(routePath: string) {
    // webpack 解析 import 时，import 接受的路径尽可能是静态化的，不能是变量、表达式，webpack 会报错
    return React.lazy(() => import(/* webpackChunkName: "[request]" */ `${routePath}`));
}
