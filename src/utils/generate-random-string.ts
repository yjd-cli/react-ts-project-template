/**
 * @author：姚嘉东
 * @description：生成随机字符串
 * @date：2020/3/18
 */

export function generateRandomString(len: number) {
    let i = 0,
        str = '',
        base = 19968,
        range = 10;
    // 19968 至 40869
    while (i < len) {
        i++;
        let lower = parseInt('' + Math.random() * range);
        str += String.fromCharCode(base + lower);
    }
    return str;
}
