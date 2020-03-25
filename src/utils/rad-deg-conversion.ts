/**
 * @author：姚嘉东
 * @description：弧度—角度转换工具函数
 * @date：2020/3/18
 */

/**
 * 弧度转换成角度
 * @param rads 弧度
 */
export function convertRadToDeg(rads: number) {
    return (rads * 180) / Math.PI;
}

/**
 * 角度转换成弧度
 * @param deg 角度
 */
export function convertDegToRad(deg: number) {
    return (Math.PI * deg) / 180;
}
