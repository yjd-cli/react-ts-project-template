const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 生产环境资源包路径配置
 */
const libs = {
    // iconfont: {
    //     js: ['./fonts/iconfont.js'],
    //     css: ['./fonts/iconfont.css']
    // },
};

/**
 * 开发环境资源包路径配置
 */
if (process.env.NODE_ENV === 'development') {
    Object.assign(libs, {
        // iconfont:{
        //     js: ['//at.alicdn.com/t/font_xxx.js'],
        //     css: ['//at.alicdn.com/t/font_xxx.css']
        // },
        dll: {
            js: ['/public/dll/dllLibs.dll.js']
        }
    });
}

function createHtmlWebpackPluginConfig(chunkName, path, modules, chunks) {
    const config = {
        favicon: './src/entry/favicon.ico',
        filename: `${chunkName}.html`,
        template: `${path || './src/entry/index.html'}`,
        inject: true,
        chunks: ['vendors', chunkName].concat(chunks),
        chunksSortMode: 'dependency',
        minify: {
            removeComments: true,
            collapseWhitespace: false
        },
        dependencies: {
            css: [],
            js: []
        },
    };
    modules && modules.forEach(m => {
        if (m && m.css && m.css.length > 0) {
            config.dependencies.css = config.dependencies.css.concat(m.css);
        }
        if (m && m.js && m.js.length > 0) {
            config.dependencies.js = config.dependencies.js.concat(m.js);
        }
    });
    return new HtmlWebpackPlugin(config);
}

module.exports = [
    createHtmlWebpackPluginConfig('index', '', [libs.dll]),
];














