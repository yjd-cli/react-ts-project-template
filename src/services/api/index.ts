/**
 * @author：姚嘉东
 * @description：后端接口入口文件
 * @date：2020/3/19
 */
import * as user from './user';

// api 中的 key 以单个模块命名，防止接口重名
export const api = {
    user,
};
