// https://prettier.io/docs/en/configuration.html
// https://prettier.io/docs/en/options.html
// https://juejin.cn/post/6909788084666105864
module.exports = {
  // tab 缩进大小,默认为 2

  tabWidth: 2,
  // 单行代码最大长度，默认 80，如果这个值设置较小时，格式化时会把能分割的内容换行对齐展示，具体如下：
  // 格式化前
  //   syncBtnNode?: React.FunctionComponent<ISyncBtnNodeProps> | React.ComponentClass<ISyncBtnNodeProps, any> | React.ReactNode;
  // 格式化后
  //   syncBtnNode?:
  //    | React.FunctionComponent<ISyncBtnNodeProps>
  //    | React.ComponentClass<ISyncBtnNodeProps, any>
  //    | React.ReactNode;
  printWidth: 100,

  // 使用分号, 默认 true
  semi: true,

  // 在语句末尾添加分号，默认 none，可选值 none|es5|all
  trailingComma: 'all',

  // 使用单引号, 默认 false(在 jsx 中配置无效, 默认都是双引号)
  singleQuote: true,

  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如 x => x
  // always 总是有括号
  // arrowParens: 'always',
  // 在 HTML、Vue、JSX 文件中，单个属性单独一行展示
  singleAttributePerLine: true,

  // https://github.com/trivago/prettier-plugin-sort-imports
  importOrder: [
    // 样式文件
    '^\.(.+)\.(less|css|scss)$',
    // 三方 npm 依赖
    '<THIRD_PARTY_MODULES>',
    // 二方 npm 依赖
    '^@ngiq/(.+)',
    // 路径别名
    '^@src/(.+)',
    // 本地依赖—组件
    '^\.(.+)\.(jsx|tsx)$',
    // 本地依赖—脚本
    '^\.(.+)\.(js|ts)$',
    // 其他，这个兜底的值必填
    '^[./]',
  ],
  // 是否在上述排序规则之间换行
  importOrderSeparation: true,
  importOrderParserPlugins: ['classProperties', 'typescript', 'jsx', 'decorators-legacy'],

  plugins: [
    // https://github.com/matzkoh/prettier-plugin-packagejson
    // A Prettier plugin to sort the keys of a package.json file using sort-package-json.
    require("prettier-plugin-packagejson"),
  ],
};

