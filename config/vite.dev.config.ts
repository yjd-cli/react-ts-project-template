import reactSWC from '@vitejs/plugin-react-swc';
import { defineConfig, ConfigEnv, UserConfig } from 'vite';
import usePluginImport from 'vite-plugin-importer';

// import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';

import viteBaseConfig from './vite.base.config';

export default defineConfig((configEnv: ConfigEnv): UserConfig => {
  const baseConfig: UserConfig = viteBaseConfig(configEnv);

  return {
    ...baseConfig,

    // https://cn.vitejs.dev/config/shared-options.html#loglevel
    // 调整控制台输出的级别
    // 默认值 => 'info'
    logLevel: 'info',

    // 设为 false 可以避免 Vite 清屏而错过在终端中打印的某些关键信息
    clearScreen: false,

    server: {
      // 指定服务器应该监听哪个 IP 地址
      // 默认值 => 'localhost'
      host: 'localhost',

      // 指定开发服务器端口
      // 默认值 => 5173
      // 注意：默认情况下，如果端口已经被使用，Vite 会自动尝试下一个可用的端口
      port: 3000,

      // true => 若端口已被占用则会直接退出，而不是尝试下一个可用端口。
      strictPort: true,

      // https://cn.vitejs.dev/config/server-options.html#server-open
      // 开发服务器启动时，自动在浏览器中打开应用程序
      open: true,

      // https://cn.vitejs.dev/config/server-options.html#server-cors
      // https://github.com/expressjs/cors#configuration-options
      // true => 开发服务器开启 CORS，也可以传递一个对象来自定义 CORS 配置
      // cors: true,

      // https://cn.vitejs.dev/config/server-options.html#server-watch
      // 配置哪些文件会被监听
      watch: {
        // Vite 服务器默认会忽略对 .git/ 和 node_modules/ 目录的监听
        // 以下配置可以监听 node_modules 目录下的包内容改变
        // ignored: ['!**/node_modules/your-package-name/**']
      },

      // 自定义开发环境的接口请求的 origin 字段
      // origin: 'http://127.0.0.1:3000/',

      // 本地开发环境通过代理实现跨域
      // 生产环境使用 nginx 转发
      // https://github.com/http-party/node-http-proxy#options
      // proxy: {
      //   '/xxx-api': {
      //     target: 'http://xxx-api.com',
      //     // true/false, Default: false - changes the origin of the host header to the target URL
      //     changeOrigin: true,
      //     // rewrite: (path) => {
      //     //   console.log(path);
      //     //   return path.replace(/^\/api/, '')
      //     // },
      //   },
      // },
    },

    optimizeDeps: {
      // https://cn.vitejs.dev/config/dep-optimization-options.html#optimizedeps-include
      // 默认情况下，不在 node_modules 中的、通过 npm link 链接的包不会被预构建
      // 使用此选项可强制预构建通过 npm link 链接的包
      include: [],

      // https://cn.vitejs.dev/config/dep-optimization-options.html#optimizedeps-exclude
      // 在预构建中强制排除的依赖项，这样该依赖项就能触发热更新（调试依赖项源代码时有用）
      // 注意：如果一个依赖项只输出了 CommonJS 格式的产物，没有输出 ESM 格式的产物，那么就不应该被排除
      // exclude: ["react"],
      exclude: [],

      // https://cn.vitejs.dev/config/dep-optimization-options.html#optimizedeps-disabled
      // 注意：目前依赖预构建仅适用于开发模式，会使用 esbuild 将依赖项（如：CJS 模块）转换为 ES 模块。在生产构建中，将使用 @rollup/plugin-commonjs 代替 esbuild 的能力。
      // 禁用依赖优化
      // true => 将在构建和开发期间均禁用优化器。
      // 'build' 或 'dev' => 将仅在其中一种模式下禁用优化器。
      // 默认值 => 'build'，生产环境禁止依赖优化
      // disabled: false,
    },

    // https://cn.vitejs.dev/guide/api-plugin.html
    plugins: [
      // https://github.com/vitejs/vite-plugin-react-swc
      reactSWC({}),

       // 开发环境和生产环境都需要按需加载组件库样式（会自动加载当前组件需要的样式），如果开发环境不设置的话，就不会自动引入组件样式，导致页面样式错乱
      // https://github.com/umijs/babel-plugin-import
      // 按需加载 ES Module
      // 以下有两种支持按需加载的 vite 插件
      // https://github.com/ajuner/vite-plugin-importer
      usePluginImport({
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      }),
      // https://github.com/vbenjs/vite-plugin-style-import/blob/main/README.zh_CN.md
      // 支持自定义
      // createStyleImportPlugin({
      //   resolves: [AntdResolve()],
      // }),
    ],
  };
});
