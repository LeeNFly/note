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
- 在入口文件 src/main.js中配置 (main.js中所有的 import 都要在 use 之前)
```js
// 导入elementui - js
import ElementUI from 'element-ui'
// 导入elementui - css
import 'element-ui/lib/theme-chalk/index.css'
// 安装插件
Vue.use(ElementUI)
```
element-ui说明: 

    element-ui 提供的每个标签, 都是一个组件,

    element-ui标签组件将来会被element-ui自动编译, 编译成普通标签, 然后将编译后的标签展示到页面上 (我们不需要关心编译的问题)

    ★ 修改element-ui标签组件的样式, 建议修改element-ui标签组件编译后, 页面生成的具体标签的样式

    element-ui组件标签, 也可以看作是一个标签, 也可以给组件标签添加类名, 属性等. 将来通过查看具体编译后的结果, 再对具体编译后的生成的标签进行添加样式操作

    element-ui组件标签添加类名class, 将来会在编译后生成的具体标签上添加对应类名, 然后就可以通过这个类名给编译生成的具体标签添加样式了

    element-ui标签可以和普通标签一起混合, 嵌套, 并列使用, element-ui标签需要编译后展示, 普通标签直接展示, 并且编译时会保持混合, 嵌套, 并列关系

    element-ui标签可以嵌套, 并列普通标签, 也可以嵌套 并列 element-ui标签, 普通标签也可以嵌套 并列 element-ui标签和普通标签, 并且将来编译的时候会保持标签的嵌套  并列 关系

    可以把element-ui标签就当作标签来使用, element-ui在组件的template中使用, 所以也可以使用/也拥有vue特性

## 项目启动做了什么
- 1 在终端中运行：`npm run dev`，实际上就是运行了：`webpack-dev-server ...`
- 2 使用 webpack-dev-server 开启一个服务器
- 3 根据指定的入口 `src/main.js` 开始分析入口中使用到的模块
- 4 当遇到 `import` 的时候，webpack 就会加载这些模块内容（如果有重复模块，比如：Vue，实际上将来只会加载一次），遇到代码就执行这些代码
- 5 创建 Vue 实例，将 App 组件作为模板进行编译，并且将 App 组件中 template 的内容渲染在页面 #app 的位置
