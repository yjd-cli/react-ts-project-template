import * as path from 'path';

// https://cn.rollupjs.org/configuration-options/
export default {
  input: {
    // index.html 与项目根目录：https://cn.vitejs.dev/guide/#index-html-and-project-root
    // index.html 必须放在项目根目录下
    // 多页面应用模式：https://cn.vitejs.dev/guide/build.html#multi-page-app
    main: path.resolve('index.html'),
  },

  output: {
    // 指定输出路径（相对于 项目根目录)
    dir: 'dist',

    // 指定生成的 bundle 的格式：amd、cjs、es、iife、umd、system
    // 默认值 => 'es'
    format: 'es',

    // 指定 入口 chunk 的 输出路径 + 文件名称
    // entryFileNames:'assets/[name].js',
    entryFileNames: ({ name }) => {
      // console.log('entryFileName: ', name);
      // 注意：chunkFileNames 没有后缀名
      const baseDir = 'assets';
      const handledName = name.toLocaleLowerCase();
      const fileName = `${handledName}-[hash].js`;

      // 稍微做下区分：入口 chunk 放到 assets 目录下，而其他的 chunk 放到 assets/js 目录下
      return `${baseDir}/${fileName}`;
    },

    // 指定 chunk 的 输出路径 + 文件名称
    // chunkFileNames:'',
    chunkFileNames: ({ name: chunkFileName }) => {
      // console.log('chunkFileName: ', chunkFileName);
      // 注意：chunkFileNames 没有后缀名
      const baseDir = 'assets';
      // 小写转换的原因：如果组件名是大写的，那么输出的文件名也会是大写的
      const handledName = chunkFileName.toLocaleLowerCase();
      const fileName = `${handledName}-[hash].js`;
      return `${baseDir}/js/${fileName}`;
    },

    // 指定 静态资源 的 输出路径 + 文件名称（相对于 项目根目录)
    assetFileNames: ({ name }) => {
      // console.log('assetFileName: ', name);
      const baseDir = 'assets';
      // const staticDir = `${baseDir}/static`;
      const fileName = `[name]-[hash][extname]`;
      if (name.endsWith('.svg')) {
        return `${baseDir}/svgs/${fileName}`;
      }

      if (name.endsWith('.png') || name.endsWith('.jpg') || name.endsWith('.webp')) {
        return `${baseDir}/images/${fileName}`;
      }


      if (name.endsWith('.ttf') || name.endsWith('.otf') || name.endsWith('.woff') || name.endsWith('.eot')) {
        return `${baseDir}/fonts/${fileName}`;
      }

      if (name.endsWith('.css')) {
      // 小写转换的原因：如果文件名是大写的，那么输出的文件名也会是大写的
        const handledName = name.toLocaleLowerCase();
        const fileName = `${handledName}-[hash][extname]`;
        return `${baseDir}/css/${fileName}`;
      }

      return `${baseDir}/${fileName}`;
    },

    // https://cn.vitejs.dev/guide/build.html#chunking-strategy
    // https://cn.rollupjs.org/configuration-options/#output-manualchunks
    // 自定义分包策略
    // 默认情况下（不使用 splitVendorChunkPlugin 插件 或者 配置 manualChunks），会把在 node_modules 里的生产依赖打包进 入口 chunk 里
    manualChunks: (id, meta) => {
      // console.log('id,meta: ', id, meta);
      if (id.includes('node_modules')) {
        return 'vendor';
      }
    },

    // 搭配 external 使用，通过外部引入的方式加载依赖，如：用 script 标签直接加载该依赖的 CDN 链接
    // paths:{
    //   xxx:'https://xxx.cdn.xxx'
    // }
  },
};
