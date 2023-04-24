// 注意：此文件应该只存放所有环境（开发环境、生产环境、测试环境等）【通用】的配置项。
// 像 plugins 这种特殊的配置项，因为每个插件的使用场景（开发环境、生产环境）不一致、插件执行的先后顺序要求也不一样，所以当前文件不考虑设置 plugins 配置项，各个环境对应的配置文件自行设置
import * as path from 'path';
import postcssPresetEnv from 'postcss-preset-env';
import postcssNest from 'postcss-nesting';
import { ConfigEnv, UserConfig } from 'vite';

// https://vitejs.dev/config/
export default function getBaseConfig(configEnv: ConfigEnv): UserConfig {
  // const isDevelopment = configEnv.mode === "development";

  return {
    // https://cn.vitejs.dev/guide/#index-html-and-project-root
    // 项目根目录（index.html 文件所在的位置）,
    // 默认值 => process.cwd() => 当前项目路径，和当前 vite.config.ts 文件所在位置无关
    // root: process.cwd(),
    // index.html 必须放在项目根目录下，否则开发服务器就会找不到相关的资源文件
    // root:  path.resolve('public'),

    // 开发或生产环境服务的公共基础路径
    // 默认值 => '/'
    // base: '/',

    // https://cn.vitejs.dev/guide/assets.html#the-public-directory
    // 静态资源服务的文件夹
    // 默认值 => 'public'
    // publicDir: 'public',

    // https://cn.vitejs.dev/config/shared-options.html#mode
    // https://cn.vitejs.dev/guide/env-and-mode.html#modes
    // 指定开发模式：默认情况下，开发服务器 (dev 命令) 运行在 development (开发) 模式，而 build 命令则运行在 production (生产) 模式。
    // mode: 'development',

    resolve: {
      // alias 别名配置不仅在 JavaScript 的 import 语句中生效，在 CSS 代码的 @import 和 url导入语句中也同样生效
      alias: {
        '@src': path.resolve('src'),
      },
      // 默认： ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
      // 这里不添加 '.css'、'.less'、'.json'的原因：在一个模块中同时引入了很多模块时，还是需要快速区分下哪些是样式模块
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    },

    css: {
      // https://cn.vitejs.dev/config/shared-options.html#css-modules
      modules: {
        // 参考：https://github.com/madyankin/postcss-modules#localsconvention
        localsConvention: 'camelCase',

        generateScopedName: '[name]__[local]--[hash:base64:5]',
      },

      // https://cn.vitejs.dev/config/shared-options.html#css-postcss
      // https://juejin.cn/post/7178454300572516409
      postcss: {
        plugins: [
          // https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting
          postcssNest(),
          postcssPresetEnv()
        ],
      },

      // https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions
      // 指定传递给 CSS 预处理器的选项
      preprocessorOptions: {
        // https://lesscss.org/usage/#less-options
        // https://juejin.cn/post/7177549666291515447
        less: {
          javascriptEnabled: true,
          // math: "always",
          // additionalData: '',
        },
      },

      // https://cn.vitejs.dev/config/shared-options.html#css-devsourcemap
      // https://juejin.cn/post/7177554425886539833
      //【开发环境】是否启用 sourcemap
      // 默认值 => false
      devSourcemap: true,
    },

    // https://cn.vitejs.dev/config/shared-options.html#esbuild
    // 默认情况下，esbuild 只会处理 .ts、.jsx、.tsx 文件
    // esbuild:{},

    // https://cn.vitejs.dev/guide/env-and-mode.html#env-files
    // https://cn.vitejs.dev/config/#using-environment-variables-in-config
    // 指定 .env 文件目录
    envDir: path.resolve('env'),
    // 注意：以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中。所以敏感信息不要以 envPrefix 为前缀。
    // 默认值 => VITE_
    envPrefix: 'PUBLIC_',
  };
}
