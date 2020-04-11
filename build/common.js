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
 * function to get style loaders
 * @param options
 * @param preProcessor
 */
const getBaseStyleLoaders = (options, preProcessor) => {
    options = options ? options : {
        cssModule: false
    };
    const loaders = [
        webpackEnv.isEnvDevelopment && 'style-loader',
        webpackEnv.isEnvProduction && MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: options.cssModule ? {
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

/**
 * 获取公共的 style loaders（可选择是否在项目中开启使用 less/sass）
 * @param options
 */
const getStyleLoaders = (options) => {
    options = options ? options : {
        cssModule: false,
    };
    return [
        {
            test: styleRegex.cssRegex,
            exclude: [styleRegex.cssModuleRegex],
            // exclude: /node_modules/,
            use: getBaseStyleLoaders(),
        },
        {
            test: styleRegex.cssModuleRegex,
            use: getBaseStyleLoaders({cssModule: options.cssModule}),
        },
        {
            test: styleRegex.lessRegex,
            exclude: [styleRegex.lessModuleRegex],
            use: getBaseStyleLoaders(null, 'less-loader'),
        },
        {
            test: styleRegex.lessModuleRegex,
            use: getBaseStyleLoaders({cssModule: options.cssModule}, 'less-loader'),
        },
        {
            test: styleRegex.sassRegex,
            exclude: [styleRegex.sassModuleRegex],
            use: getBaseStyleLoaders(null, 'sass-loader'),
        },
        {
            test: styleRegex.sassModuleRegex,
            use: getBaseStyleLoaders({cssModule: options.cssModule}, 'sass-loader'),
        }
    ];
};

module.exports = {
    webpackEnv,
    styleRegex,
    getStyleLoaders
};
