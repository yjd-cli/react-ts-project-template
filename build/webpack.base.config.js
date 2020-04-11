const webpack = require('webpack');
const path = require('path');
// const HappyPack = require('happypack');
// const os = require('os');
// const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const htmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const smw = new SpeedMeasureWebpackPlugin();
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const common = require('./common');
const htmlPlugins = require('./webpack.html.config');

const config = {
    context: path.resolve(__dirname, "../"),
    // stats: 'minimal',
    stats: 'errors-only',
    entry: {
        index: './src/entry/index.tsx'
    },
    module: {
        // 用于配置哪些模块文件的内容不需要进行解析，以提高整体的构建速度
        noParse: /jquery|lodash/,//|moment
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                // use: ['happypack/loader?id=js'],
                use: ['babel-loader'],
                // 这里是可以排除 node_modules 的，不用担心 antd 按需加载会失效
                // 因为 babel-loader 是针对你项目中自己写的 js/jsx 文件处理解析的
                // 当匹配到文件时，就会读取 babel.config.js 文件里面的配置，然后才做按需加载
                exclude: [/node_modules/, /public/, /(.|_)min\.js$/],
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=./fonts/[name].[contenthash:8].[ext]',
            },
            {
                test: /\.(png|jpg|gif|jpeg|ico|cur)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=8192&name=./images/[name].[contenthash:8].[ext]'
            },
        ]
    },
    plugins: [
        ...htmlPlugins,
        // new HappyPack({
        //     id: 'js',
        //     loaders: ['babel-loader?cacheDirectory=true'],
        //     threadPool: happyThreadPool
        // }),
        new CleanWebpackPlugin(
            {
                cleanOnceBeforeBuildPatterns: [path.resolve('dist')],
            }
        ),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.less', '.scss', '.css', '.json'],
        plugins: [
            // 将 tsconfig.json 中的路径配置映射到 webpack 中
            new TsconfigPathsPlugin({
                configFile: './tsconfig.json'
            })
        ],
        // 因为使用了 TsconfigPathsPlugin 插件，所以这里就不需要再映射路径了
        // alias: {
        //     "@src": path.resolve('src'),
        //     "@public": path.resolve('public'),
        //     "@assets": path.resolve('src/assets'),
        // },
    },
    externals: {
        // 'react':{
        //     root:'React',
        //     commonjs:'react',
        //     commonjs2:'react',
        //     amd:'react',
        // },
        //'react-dom': 'ReactDOM'
    }
};

// console.log(process.env.BUILD_SPEED_MEASUREMENT);
let baseConfig = {};
if (common.webpackEnv.isEnvSpeedMeasurement) {
    // 测试每个 loader、plugin 的速度
    baseConfig = smw.wrap(baseConfig)
} else {
    baseConfig = config;
}

module.exports = baseConfig;
