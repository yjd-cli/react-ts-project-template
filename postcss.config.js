// postcss-loader 会自动查找并调用这个文件
const autoprefixer = require('autoprefixer');
module.exports = {
    plugins: [autoprefixer()],
};
