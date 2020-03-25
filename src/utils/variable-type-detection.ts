/**
 * @author: 姚嘉东
 * @description: 变量类型检测工具方法
 */

/**
 * 检测变量类型
 * @param type
 */
function isType(type) {
    return function(value): boolean {
        return Object.prototype.toString.call(value) === `[object ${type}]`;
    };
}

export const variableTypeDetection = {
    isNumber: isType('Number'),
    isString: isType('String'),
    isBoolean: isType('Boolean'),
    isNull: isType('Null'),
    isUndefined: isType('Undefined'),
    isSymbol: isType('Symbol'),
    isFunction: isType('Function'),
    isObject: isType('Object'),
    isArray: isType('Array'),
};
