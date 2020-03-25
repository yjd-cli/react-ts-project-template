/**
 * @author：姚嘉东
 * @description：获取 URL 参数
 * @date：2020/3/18
 */

/**
 * 获取 URL 参数
 * @param name
 */
export function getUrlParam(name: string) {
    // 构造一个含有目标参数的正则表达式对象
    const reg = new RegExp('(^|&)' + name.toLowerCase() + '=([^&]*)(&|$)');
    // 匹配目标参数
    const r = window.location.search
        .substr(1)
        .toLowerCase()
        .match(reg);
    if (r != null) {
        //返回参数值
        return unescape(r[2]);
    }
    return null;
}
