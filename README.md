## 项目目录结构说明
```markdown
vite-react-ts-project-template
  ├── .husky        
  ├── build                     # vite 构建配置
  │   ├── vite.base.config.ts
  │   ├── vite.dev.config.ts
  │   └── vite.prod.config.ts
  ├── env                       # vite 项目环境变量
  ├── public                    # 公共静态资源文件目录
  │   └── vite.svg
  ├── scripts                   # 项目构建脚本
  ├── package.json
  ├── yarn.lock                 # 项目统一使用 yarn
  ├── tsconfig.json
  ├── babel.config.js
  ├── README.md
  ├── commitlint.config.js      # git 提交规范配置文件
  ├── lint-staged.config.js     # git lint-staged 匹配规则配置文件
  ├── CHANGELOG.md              # 项目 changelog（可根据 git commit 自动生成） 
  ├── prettier.config.js        # 代码格式化配置文件
  ├── postcss.config.js
  ├── index.html               
  ├── tsconfig.node.json
  └── src
     ├── pages                  # 页面目录（只存放页面容器组件）
     │   ├── home
     │   ├── register
     │   └── login
     ├── components             # 页面下的业务组件目录（根据页面划分子目录）
     │   ├── login
     │   └── home
     ├── routes                 # 配置式路由
     ├── services               # 后端接口相关   
     │   ├── api
     │   ├── axios.ts
     │   ├── config.ts
     │   ├── token-manager.ts
     │   └──  server-response-manager.ts
     ├── store                  # 全局 store 目录
     │   ├── index.ts
     │   ├── history.ts
     │   └── models             # 数据 model 目录（global model + 按页面划分的 model）
     ├── hooks                  # 自定义 hooks
     ├── utils                  # 工具函数
     │   ├── index.ts
     │   ├── generate-id.ts
     │   ├── get-url-params.ts
     │   ├── generate-random-string.ts
     │   └── variable-type-detection.ts
     ├── d.ts
     │   └── global.d.ts
     ├── common                 # 项目通用代码目录
     │   ├── components         # 通用的业务组件/UI组件目录
     │   ├── global-context.ts  
     │   ├── event-center.ts    # 事件中心
     │   └── styles
     ├── vite-env.d.ts          # vite 环境变量声明文件
     ├── assets                 # 项目静态资源文件目录
     │   ├── fonts              
     │   ├── images
     │   └── styles
     ├── main.tsx               # 项目入口文件
     ├── App.tsx                # 项目根容器组件
     ├── App.css
     └── index.css
```

## 项目主要技术栈
```markdown
- react                    "^18.0.17"
- react-dom                "^18.2.0"
- react-router             "^6.3.0"
- react-router-dom         "^6.3.0"
- react-beautiful-dnd      "^13.1.0"
- react-intl               "^6.0.5"
- react-resizable          "^3.0.4"

- less                     "^4.1.3"
- typescript               "^4.7.4"
- vite                     "^3.0.7"
- lodash                   "^4.17.21"
- moment                   "^2.29.4""
- immer                    "^9.0.15"
- events                   "^3.3.0"
- axios                    "^0.27.2"
- antd                     "^4.22.6"
- ahooks                   "^3.7.0"
- rematch                  "^2.2.0"
```

## 项目开发规范
- 尽量使用 ahooks
- 使用 less + css ：*.module.less/*.module.css 文件支持模块化
- 尽量使用 react hooks 实现 react 组件
- 页面维度的数据存放到页面级别的 model，只有所有页面共用的数据才存放到 global model
- env 环境变量：以 PUBLIC_ 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中。所以敏感信息不要以 PUBLIC_ 为前缀。
- pages 只存放页面容器组件
- components 存放页面下的业务组件（容器组件 + UI组件），需要以页面维度划分子目录
- 配置式路由：
  - 项目路由统一在 routes 目录下配置
  - 页面级别路由建议使用动态加载
  - 路由组件统一使用 `export default xxx` 的形式导出，否则路由无法渲染出来


## [Git 提交信息规范](https://commitlint.js.org/#/reference-rules?id=rules)
- feat => 新功能（feature）
- fix => 修补bug
- docs => 文档（documentation）
- style => 格式（不影响代码运行的变动）
- refactor => 重构（即不是新增功能，也不是修改bug的代码变动）
- test => 增加测试文件
- revert => 撤退之前的commit
- perf => 性能提升（提高性能的代码改动）
- build => 构建过程或辅助工具的变动（webpack等）
- ci => 更改CI配置文件和脚本
- chore => 不修改src或测试文件的其他更改


替换 Moment.js
https://4x.ant.design/docs/react/replace-moment-cn


rematch 使用：
hooks 函数组件中使用：https://rematchjs.org/docs/getting-started/typescript#react-hooks-types
class 类组件中使用：https://rematchjs.org/docs/getting-started/typescript#react-class-types
immer 不可变数据流

函数组件不需要再用 connect 订阅 store 中的状态


connected-react-router 不支持 react-router V6 ：https://www.npmjs.com/package/connected-react-router


public 目录使用说明
https://cn.vitejs.dev/guide/assets.html#the-public-directory


vite 默认支持的浏览器兼容性
https://cn.vitejs.dev/guide/build.html#browser-compatibility

环境变量
https://cn.vitejs.dev/guide/env-and-mode.html#env-variables
https://cn.vitejs.dev/config/#using-environment-variables-in-config


index.html 与项目根目录 =>  index.html 必须放在项目根目录下
https://cn.vitejs.dev/guide/#index-html-and-project-root
https://cn.vitejs.dev/guide/build.html#multi-page-app


vite.base.config.ts


待讨论：如果组件名是大写的，那么最初输出的 chunk 文件名是否保持一致（默认情况下，会保持原样）


https://commitlint.js.org/#/concepts-commit-conventions
https://juejin.cn/post/6976891381914533918
https://juejin.cn/post/7136009620979449893
在使用 git commit 命令提交代码时，提交信息应该按照一定的格式结构进行编写，以便更清晰地表达提交的内容和意图。一般来说，提交信息应该包含以下三个部分：

```
<type>(<scope>): <subject>

<body>

<footer>
```

其中 `<type>`是必需的，表示提交的类型，包括以下选项：

- `feat`: 新功能
- `fix`: 修复问题
- `docs`: 文档变更
- `style`: 代码格式（不影响代码运行的变动）
- `refactor`: 重构（即不是新增功能，也不是修改bug的代码变动）
- `test`: 增加测试
- `chore`: 构建过程或辅助工具的变动

`<scope>`是可选的，表示提交影响的范围。

`<subject>`是必需的，简要描述提交的内容。

`<body>`是可选的，更详细地描述提交的内容。

`<footer>`是可选的，用于引用问题编号或关闭问题等。

例如：

```
feat(login): add remember me feature

Add a checkbox to the login form that allows users to save their login information for future use.

Closes #1234
```

配置命令行提交交互
https://juejin.cn/post/6976891381914533918#heading-30
https://www.npmjs.com/package/@commitlint/cz-commitlint
https://commitlint.js.org/#/reference-prompt?id=questions


有性能问题了再考虑升级到 vite 高版本
https://gist.github.com/sapphi-red/db27f9c18ed31894e409224051119e1b


Features
- Vite with React, TypeScript
- 工作流
- elsint
- 