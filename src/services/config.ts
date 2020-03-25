/**
 * @author：姚嘉东
 * @description：后端接口配置文件
 * date：2020/3/19
 */
let str: string;
switch (process.env.NODE_ENV) {
    // 开发环境接口配置
    case 'development':
        str = '/server'; // 可以替换成 http://xxx:6666/server
        break;
    // 生产环境接口配置
    case 'production':
        str = '/server'; // 可以替换成 http://xxx:8888/server
        break;
    default:
        str = '/server';
        break;
}
export const host = str;
