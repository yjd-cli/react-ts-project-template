const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, "../"),
    entry: {
        dllLibs: ['react', 'react-dom', 'lodash', 'antd', 'react-redux', 'redux','history', 'react-router-dom', 'connected-react-router','axios','events','moment','react-beautiful-dnd']
    },
    output: {
        path: path.resolve('public'),
        // 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称
        filename: 'dll/[name].dll.js',
        // 默认是 var 这个全局变量，如果以这种方式导出的话，只能用脚本的方式进行全局访问
        libraryTarget: 'var',
        // 存放动态链接库的全局变量名称，例如对应 libs 来说就是 _dll_libs
        library: '_dll_[name]',
    },
    plugins: [
        new DllPlugin({
            // 动态链接库的全局变量名称，需要和 output.library 中保持一致
            // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
            // 例如 libs.manifest.json 中就有 "name": "_dll_libs"
            name: '_dll_[name]',
            // 描述动态链接库的 manifest.json 文件输出时的文件名称
            path: path.join('public', 'dll/[name].manifest.json'),
        }),
    ]
};
