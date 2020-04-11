/**
 * 所有 Webpack 配置文件的公共属性、方法
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


/**
 * webpack 环境变量
 */
const webpackEnv = {
    isEnvDevelopment: process.env.NODE_ENV === 'development',
    isEnvProduction: process.env.NODE_ENV === 'production',
    isEnvSpeedMeasurement: process.env.SPEED_MEASUREMENT,
};

/**
 * 样式文件正则匹配
 */
const styleRegex = {
    cssRegex: /\.css$/,
    cssModuleRegex: /\.module\.css$/,
    lessRegex: /\.less$/,
    lessModuleRegex: /\.module\.less$/,
    sassRegex: /\.(scss|sass)$/,
    sassModuleRegex: /\.module\.(scss|sass)$/,
};


/**
 * common function to get style loaders
 * @param options
 * @param preProcessor
 */
const getStyleLoaders = (options, preProcessor) => {
    options = options ? options : {
        CssModule: false
    };
    const loaders = [
        webpackEnv.isEnvDevelopment && 'style-loader',
        webpackEnv.isEnvProduction && MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: options.CssModule ? {
                localsConvention: 'camelCase',
                modules: {
                    localIdentName: '[local]--[hash:base64:6]'
                },
            } : {}
        },
        'postcss-loader',
    ].filter(Boolean);

    if (preProcessor) {
        loaders.push(preProcessor);
    }
    return loaders;
};

module.exports = {
    webpackEnv,
    styleRegex,
    getStyleLoaders
};
