module.exports = {
    // 这个不设置的话，webpack 魔法注释会被删除
    comments: true,
    presets: [
        [
            '@babel/preset-env',
            {
                // 浏览器兼容方案配置
                targets: {
                    browsers: ['>0.25%', 'not ie 11', 'not op_mini all'],
                },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            'import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css',
            },
        ],
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 3,
                helpers: true,
                regenerator: true,
                useESModules: true,
            },
        ],
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true,
            },
        ],
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-async-to-generator',
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
    ],
};
