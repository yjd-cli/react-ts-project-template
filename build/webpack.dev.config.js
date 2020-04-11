const webpack = require('webpack');
const path = require('path');
const {smart} = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
// const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
// const manifestJson = require('../public/dll/dllLibs.manifest.json');
const common = require('./common');

const styleLoaders = common.getStyleLoaders({
    cssModule: true,
});

module.exports = smart(baseConfig, {
    mode: 'development',
    // devtool: 'cheap-module-eval-source-map',
    devtool: 'source-map',
    output: {
        // 开发环境下，filename 不能使用 contenthash/chunkhash
        filename: 'js/[name].[hash:8].bundle.js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: '/',
    },
    module: {
        rules: [].concat(styleLoaders),
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // dll 不要和 splitChunks 一起使用，会出问题
        // dll 对于 webpack 4 来说，貌似提升的速度不大明显
        // new DllReferencePlugin({
        //     manifest: manifestJson
        // }),
    ],
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: /node_modules/
    },
    devServer: {
        contentBase: './',
        disableHostCheck: true,
        host: '0.0.0.0',
        useLocalIp: true,
        port: 666,
        historyApiFallback: true,
        inline: true,
        hot: true,
        overlay: {
            errors: true,
            warnings: true,
        },
        // open: true,
        // openPage:'dist/index.html',
    }
});




