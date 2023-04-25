// https://commitlint.js.org/#/reference-configuration
// https://commitlint.js.org/#/reference-rules?id=rules
// https://mp.weixin.qq.com/s/NWMba_lN_XWnEtmFMV-4ng
// cz-git：https://cz-git.qbb.sh/zh/config/

// Git commit 提交内容结构
// <type>(<scope>): <subject>
// <body>
// <footer>

// Git 提交信息规范
// /^#(KYY|LFY)-\d\s.+/ => 使用正则匹配自定义的 commit 类型，如：'#KYY-123 fix bug'
//feat => 新特性/功能
//fix => 修复bug
//docs => 修改文档
//style => 代码格式化（不影响代码运行的变动）
//refactor => 重构（即不是新增功能，也不是修复 bug 的代码改动）
//perf => 性能优化（提高性能的代码改动）
//test => 测试文件改动
//build => 构建配置改动（如：vite.config.ts）
//ci => CI/CD 配置或者 scripts 脚本改动
//chore => 其他改动（如：不修改 src 目录下的文件内容或测试文件的改动）
//revert => 撤销某次 commit

module.exports = {
  //extends: ['@commitlint/config-conventional'],
  // rule 由 key 和 配置数组 组成，如：key: [0, 'always', 123456]
  // 数组中第一位 => 校验等级，可选 [0 | 1 | 2 ]。0 => disable，1 => warning，2 => error
  //      第二位 => 是否应用规则，可选 [always | never]
  //      第三位 => rule 的具体内容
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "test",
        "revert",
        "perf",
        "build",
        "ci",
        "chore",
        // 使用正则匹配自定义的 commit 类型，如：'#KYY-123 fix bug'
        /^#(KYY|LFY)-\d\s.+/
      ]
    ],
    "subject-case": [0, "never"]
  },

  // cz-git：https://cz-git.qbb.sh/zh/config/
  prompt: {
    // https://gitmoji.dev/
    // 注意：emoji 表情不能乱用，必须统一规范
    types: [
      { value: "feat", name: "feat:           新特性/功能", emoji: ":sparkles:" },// ✨
      { value: "fix", name: "fix:            修复 bug", emoji: ":bug:" },// 🐛
      { value: "docs", name: "docs:           修改文档", emoji: ":memo:" },// 📝
      { value: "style", name: "style:          代码格式化（不影响代码运行的改动）", emoji: ":lipstick:" },// 💄
      { value: "refactor", name: "refactor:       重构（即不是新增功能，也不是修复 bug 的代码改动）", emoji: ":recycle:" },// ♻️
      { value: "perf", name: "perf:           性能优化（提高性能的代码改动）", emoji: ":zap:" },// ⚡️
      { value: "test", name: "test:           测试文件改动", emoji: ":white_check_mark:" },// ✅
      { value: "build", name: "build:          构建配置改动（如：vite.config.ts）", emoji: ":package:" },// 📦️
      { value: "ci", name: "ci:             CI/CD 配置或者 scripts 脚本改动", emoji: ":ferris_wheel:" },// 👷
      { value: "chore", name: "chore:          其他改动（如：不修改 src 目录下的文件内容或测试文件的改动）", emoji: ":hammer:" },// 🔨
      { value: "revert", name: "revert:         撤销某次 commit", emoji: ":rewind:" }// ⏪️
    ],
    useEmoji: true,
    emojiAlign: 'left',
    skipQuestions: ['scope','body','breaking','footerPrefix','footer']
  }
};
