# Vue 项目

## 项目搭建

- 1 `vue init webpack shop_admin`

```html
Project name                            ：默认
Project description                     ：默认
Author                                  ：默认
Vue build                               ：选择 Runtime + Compiler
Install vue-router?                     ：Y
Use ESLint to lint your code?           ：Y 选择 Standard
Set up unit tests                       ：n
Setup e2e tests with Nightwatch?        :n
Should we run `npm install` for you after the project has been created? (recommended) : Yes, use NPM
```

- 2 进入项目：cd shop_admin
- 3 运行项目：npm run dev

- 将脚手架默认生成的内容去掉，然后，添加了一个 Login 组件

## 如何添加一个新的功能？？？

- 1 在 `components` 中新建一个文件夹（login），在文件中创建组件(Login.vue)
- 2 在 `router/index.js` 中导入组件（Login.vue）
- 3 配置路由规则

## 在项目中使用 element-ui

- [ElementUI 文档](http://element-cn.eleme.io/#/zh-CN/component/installation)
- 安装：`npm i element-ui -S`
