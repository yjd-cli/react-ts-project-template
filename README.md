## 项目简述
【Web】前端项目模版，Web 端的业务项目可以基于此模版快速搭建。

## 项目目录结构说明
```markdown
ngiq-frontend-template-web
  ├── .github                   
  │   ├── workflows                 # 存放 GitHub Actions 的工作流程文件。如：代码校验、构建、部署、发布等。
  │   └── ...                
  ├── .husky                        # 存放 git hooks
  │   ├── commit-msg                # git commit 时触发
  │   ├── pre-commit                # git commit 前触发
  ├── build                         # vite 构建配置
  │   ├── rollup.build.config.ts    # rollup 配置文件
  │   ├── vite.base.config.ts       # vite 基础配置文件
  │   ├── vite.dev.config.ts        # vite 开发环境配置文件
  │   └── vite.prod.config.ts       # vite 生产环境配置文件
  ├── env                           # vite 项目环境变量
  ├── public                        # 公共静态资源文件目录
  │   └── vite.svg
  ├── scripts                       # 项目构建脚本
  ├── .editorconfig                 # 编辑器风格配置文件
  ├── .eslintignore                 # eslint 忽略校验配置文件
  ├── .eslintrc                     # eslint 校验配置文件
  ├── .gitignore                    # git 忽略上传配置文件
  ├── .npmrc                        # npm 配置文件
  ├── .prettierignore               # prettier 忽略配置文件
  ├── .stylelintignore              # stylelint 忽略配置文件
  ├── CHANGELOG.md                  # 项目 changelog（可配置相关插件，根据 git commit 自动生成）
  ├── commitlint.config.cjs         # git 提交规范配置文件
  ├── index.html
  ├── jest.config.ts                # jest 配置文件
  ├── lint-staged.config.cjs        # git lint-staged 规则配置文件
  ├── package.json
  ├── prettier.config.cjs           # prettier 代码格式化配置文件
  ├── README.md
  ├── stylelint.config.cjs          # stylelint 代码格式化配置文件
  ├── tsconfig.base.json            # tsconfig 基础配置文件
  ├── tsconfig.json
  ├── tsconfig.node.json
  └── src
     ├── assets                     # 项目静态资源文件目录
     │   ├── fonts              
     │   ├── images
     │   └── svgs
     ├── components                 # 项目通用的组件
     │   ├── error-boundary
     │   ├── inspector
     │   └── ...
     ├── constants                  # 存放项目中的全局变量、常量
     ├── hooks                      # 自定义 hooks
     ├── pages                      # 页面目录
     │   ├── 404
     │   ├── home
     │   ├── login
     │   └── ...
     ├── routes                     # 路由表，支持配置式路由
     ├── services                   # 后端接口相关   
     │   ├── api
     │   └── ...
     ├── store                      # 全局 store 目录
     │   ├── models                 # 数据 model 目录（global model + 按页面划分的 model）
     │   └── index.ts         
     ├── styles                     # 样式目录：存放全局样式、主题色、mixins
     ├── types                      # 存放 TS 类型声明文件
     ├── utils                      # 工具函数
     │   ├── index.ts
     │   ├── generate-id.ts
     │   ├── generate-random-string.ts
     │   └── variable-type-detection.ts
     ├── vite-env.d.ts              # vite 环境变量声明文件
     ├── main.tsx                   # 项目入口文件
     ├── App.tsx                    # 项目根容器组件
     ├── App.less
     └── index.less
```

## 项目环境要求
* `node >= 14.18`
* `npm  >= 6.14.15`

## 项目 Features
| 特性     | 描述                                     |
|:-------|:---------------------------------------|
| 包管理    | Npm                                    |
| 编写语言   | React、TypeScript                       |
| UI     | Antd V4.x                              |
| 编译&构建  | Vite、Rollup                            |
| 代码风格统一 | Editorconfig、ESLint、Prettier、Stylelint |
| 工作流    | commitlint、husky、lint-staged           |
| 图标管理   | iconfont                               |
| 效率工具   | react-dev-inspector                    |
| 国际化    | react-intl                             |
| 状态管理   | rematch、redux                          |
| 接口管理   | OpenAPI                                |
| 配置式路由  | react-router V6                        |
| 质量控制   | Jest                                   |
| 主题切换   | -                                      |
| 前端监控   | -                                      |
| CI/CD  | -                                      |


## 项目主要技术栈

| npm包                 | 版本         | 作用                                                                       |
|----------------------|------------|--------------------------------------------------------------------------|
| react                | "16.14.0"  |                                                                          |
| react-dom            | "16.14.0"  |                                                                          |
| react-router         | "~6.10.0"  |                                                                          |
| react-router-dom     | "~6.10.0"  |                                                                          |
| react-intl           | "^6.0.5"   | 国际化                                                                      |
| react-beautiful-dnd  | "^13.1.0"  | 组件拖拽                                                                     |
| react-resizable      | "^3.0.4"   | 元素拖拽放大/缩小                                                                |
| react-redux          | "~8.0.5"   | 连接组件和store                                                               |
| @rematch/core        | "~2.2.0"   | 状态管理                                                                     |
| ahooks               | "~3.7.6"   | 通用自定义 hooks                                                              |
| antd                 | "~4.24.8"  | 组件库                                                                      |
| axios                | "~1.3.5"   | 请求库                                                                      |
| dayjs                | "~1.11.7"" | 时间处理工具库                                                                  |
| immer                | "~9.0.21"  | 不可变数据流                                                                   |
| lodash-es            | "~4.17.21" | esm 版工具库                                                                 |
| normalize.css        | "~8.0.1"   | 重置浏览器默认样式                                                                |
| qs                   | "~6.11.1"  | A querystring parsing and stringifying library with some added security. |
| typescript           | "~4.9.3"   |                                                                          |
| less                 | "~4.1.3"   | css 预处理器                                                                 |
| postcss-preset-env   | "~8.3.2"   | css 代码兼容处理                                                               |
| vite                 | "~4.2.0"   | 构建工具                                                                     |
| vite-plugin-importer | "~0.2.5"   | 按需加载                                                                     |
| react-dev-inspector  | "~1.8.4"   | 效率工具：支持【开发环境】点击页面元素直接跳转到源码                                               |


## 项目开发规范
参考[项目开发规范]() 

## 项目发布规范
参考[项目发布规范]()

## [Git 提交规范](https://commitlint.js.org/#/reference-rules?id=rules)
### Git Commit 类型

| Commit 类型        | 类型描述                                |
|------------------|-------------------------------------|
| `/^#KYY-\d\s.+/` | 自定义的 commit 类型，如：'#KYY-123 fix bug' |
| feat             | 新功能（feature）                        |
| fix              | 修补 bug                              |
| docs             | 文档（documentation）                   |
| style            | 格式（不影响代码运行的变动）                      |
| refactor         | 重构（即不是新增功能，也不是修改bug的代码变动）           |
| test             | 增加测试文件                              |
| revert           | 撤退之前的 commit                        |
| perf             | 性能提升（提高性能的代码改动）                     |
| build            | 构建过程或辅助工具的变动（webpack等）              |
| ci               | 更改 CI 配置文件和脚本                       |
| chore            | 不修改 src 或测试文件的其他更改                  |


### Git Commit 结构

原文
```git
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

译文
```markdown
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

## 注意事项
- 使用 `less + css` ：`*.module.less/*.module.css` 文件支持模块化
- 尽量使用 `ahooks`，不要自己封装一些常见的、自定义 `hooks`
- 尽量使用 `react hooks` 实现 `react` 组件
- 页面维度的数据存放到页面级别的 `model`，只有所有页面共用的数据才存放到 `global model`
- `env` 环境变量：以 `PUBLIC_` 开头的环境变量会通过 `import.meta.env` 暴露在你的客户端源码中。所以敏感信息不要以 `PUBLIC_` 为前缀。
- 配置式路由：
  - 项目路由统一在 `routes` 目录下配置
  - 页面级别路由建议使用动态加载
  - 路由组件统一使用 `export default xxx` 的形式导出，否则路由无法渲染出来
- `rematch` 使用：
  - [hooks 函数组件中使用](https://rematchjs.org/docs/getting-started/typescript#react-hooks-types)
  - [class 类组件中使用](https://rematchjs.org/docs/getting-started/typescript#react-class-types)
  - 函数组件不需要再用 `connect` 订阅 `store` 中的状态
  - 项目中通过 [immer](https://immerjs.github.io/immer/zh-CN/) 实现不可变数据流
- [浏览器兼容性](https://cn.vitejs.dev/guide/build.html#browser-compatibility)
- [public目录使用说明](https://cn.vitejs.dev/guide/assets.html#the-public-directory) 
- 环境变量使用说明
  - https://cn.vitejs.dev/guide/env-and-mode.html#env-variables
  - https://cn.vitejs.dev/config/#using-environment-variables-in-config
- `index.html` 与项目根目录 => `index.html` 必须放在项目根目录下
  - https://cn.vitejs.dev/guide/#index-html-and-project-root
  - https://cn.vitejs.dev/guide/build.html#multi-page-app
- package.json 中设置了 `"type": "module"`，表示当前项目使用 `ES Modules（ESM）`模块系统，即在 `ESM` 中，需要使用 `import` 和 `export` 关键字来导入/导出模块，不能再用 `require/module.exports`。


## 未来计划
- 配置 `Git Commit` 命令行交互提示
  - https://juejin.cn/post/6976891381914533918#heading-30
  - https://www.npmjs.com/package/@commitlint/cz-commitlint
  - https://commitlint.js.org/#/reference-prompt?id=questions
- 更新 `Vite` 至最新版本
