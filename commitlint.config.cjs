// https://commitlint.js.org/#/reference-rules?id=rules
// https://github.com/conventional-changelog/commitlint
// https://juejin.cn/post/6976891381914533918

// rule 由 key 和 配置数组 组成，如：key: [0, 'always', 123456]
// 数组中第一位 => 校验等级，可选 [0 | 1 | 2 ]。0 => disable，1 => warning，2 => error
//      第二位 => 是否应用规则，可选 [always | never]
//      第三位 => rule 的具体内容

// Git commit 提交内容结构
// <type>(<scope>): <subject>
// <body>
// <footer>

// Git 提交信息规范
// /^#(KYY|LFY)-\d\s.+/ => 使用正则匹配自定义的 commit 类型，如：'#KYY-123 fix bug'

// feat => 新功能（feature）
// fix => 修补bug
// docs => 文档（documentation）
// style => 格式（不影响代码运行的变动）
// refactor => 重构（即不是新增功能，也不是修改bug的代码变动）
// test => 增加测试文件
// revert => 撤退之前的commit
// perf => 性能提升（提高性能的代码改动）
// build => 构建过程或辅助工具的变动（webpack等）
// ci => 更改CI配置文件和脚本
// chore => 不修改src或测试文件的其他更改

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'revert',
        'perf',
        'build',
        'ci',
        'chore',
        // 使用正则匹配自定义的 commit 类型，如：'#KYY-123 fix bug'
        /^#(KYY|LFY)-\d\s.+/,
      ],
    ],
    'subject-case': [0, 'never'],
  },
  // https://commitlint.js.org/#/reference-prompt
  // 配置与 @commitlint/cz-commitlint 的命令行提交交互
  // prompt: {}
};
