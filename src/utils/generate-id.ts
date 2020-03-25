/**
 * @author：姚嘉东
 * @description：生成随机 ID
 * @date：2020/3/18
 */

/**
 * 生成随机的 UUID
 * @param len
 * @param radix
 */
export function generateRandomUUID(len: number, radix: number) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [],
        i;
    radix = radix || chars.length;
    if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
    } else {
        let r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | (Math.random() * 16);
                uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}

/**
 * 生成随机的ID
 * @param randomLength
 */
export function generateRandomID(randomLength: number) {
    // 引入时间戳 随机数前置 36进制 加入随机数长度控制
    // Number.prototype.toString([radix])中的 radix 指定要用于数字到字符串的转换的基数(从2到36)
    // 如果未指定 radix 参数，则默认值为 10,所有不在范围内的基数会报错
    // Math.random().toString(36)代表36进制
    // console.log(new Number(1337).valueOf().toString());
    // 带时间戳
    return Number(
        Math.random()
            .toString()
            .substr(3, randomLength) + Date.now(),
    ).toString(36);
}
