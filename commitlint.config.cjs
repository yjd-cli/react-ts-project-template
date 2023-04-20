// https://commitlint.js.org/#/reference-rules?id=rules
// rule 由 key 和 配置数组 组成，如：key: [0, 'always', 123456]
// 数组中第一位 => level，可选 [0 | 1 | 2 ]。0 => disable，1 => warning，2 => error
//      第二位 => 是否应用规则，可选 [always | never]
//      第三位 => rule 的具体内容

// Git 提交信息规范
// feat：新功能（feature）
// fix：修补bug
// docs：文档（documentation）
// style： 格式（不影响代码运行的变动）
// refactor：重构（即不是新增功能，也不是修改bug的代码变动）
// test：增加测试
// chore：构建过程或辅助工具的变动

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']],
    // 'body-case': [0, 'never'],
  },
};
