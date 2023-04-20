// https://stylelint.io/
// https://mqhfidmks7.feishu.cn/docs/doccn9jpbLzDG5tbrRI9nOUjqRb

const commonRule = {
  // 'prettier/prettier': true,
  // 属性的排序
  'order/properties-order': [
    // 布局定位属性
    'display',
    'justify-content',
    'align-items',
    'flex',

    'position',
    'top',
    'right',
    'bottom',
    'left',
    'z-index',

    'float',
    'clear',
    'visibility',
    'overflow',
    'overflow-x',
    'overflow-y',

    // 自身属性：margin 样式属性
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',

    // 自身属性：border 样式属性
    'border',
    'border-style',
    'border-width',
    'border-color',
    'border-radius',
    'border-top',
    'border-top-style',
    'border-top-width',
    'border-top-color',
    'border-right',
    'border-right-style',
    'border-right-width',
    'border-right-color',
    'border-bottom',
    'border-bottom-style',
    'border-bottom-width',
    'border-bottom-color',
    'border-left',
    'border-left-style',
    'border-left-width',
    'border-left-color',

    // 自身属性：padding 样式属性
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',

    // 自身属性：宽高 样式属性
    'width',
    'min-width',
    'max-width',
    'height',
    'line-height',
    'min-height',
    'max-height',

    // 自身属性：背景色 样式属性
    'background',
    'background-position',
    'background-repeat',
    'background-size',
    'background-color',
    'background-clip',
    'background-image',

    // 文本属性
    'color',
    'font-size',
    'font-family',
    'font-weight',
    'text-align',
    'text-justify',
    'text-indent',
    'text-overflow',
    'text-decoration',
    'vertical-align',
    'white-space',
    'break-word',

    // 其他属性（CSS3）
    'content',
    'cursor',
    'box-shadow',
    'text-shadow',
    'background:linear-gradient',
    'transform',
    'transition',
  ],
};

module.exports = {
  // 注意：
  // 1、extends 数组中，后面的插件优先级高于前面的插件，相同的规则会进行覆盖；
  // 2、rules 中配置的规则优先级最高；
  // extends: [
  //  'stylelint-config-standard',
  //  'stylelint-config-css-modules',
  //  'stylelint-prettier/recommended',
  // ],
  overrides: [
    {
      files: ['*.css', '**/*.css'],
      // No rules are turned on by default and there are no default values. You must explicitly configure each rule to turn it on.
      // 所有规则必须显式的进行配置，因为没有默认值。
      rules: commonRule,
    },
    // 若项目中存在 less 文件，则 npm i postcss-less -D 并添加以下配置
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      // No rules are turned on by default and there are no default values. You must explicitly configure each rule to turn it on.
      // 所有规则必须显式的进行配置，因为没有默认值。
      rules: commonRule,
    },
  ],
  // https://github.com/stylelint/awesome-stylelint#readme
  plugins: ['stylelint-order'],
};
