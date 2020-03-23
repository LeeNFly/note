# Vue Cli 的说明

## 初始化项目报错

- 清除 npm 缓存文件：`npm cache clean --force`

## 如何关闭 ESLint 代码风格校验

- 在 `config/index.js` 中将 `useEslint` 设置为 false

## 自定义 ESLint 校验规则

- 在 `.eslintrc.js` 中添加 `'space-before-function-paren': 'off'` 关闭 方法名字后的空格校验规则
- 前提：如果使用了老师的 VScode 配置（ prettier ）

## 目录结构的总结

- 只需要在 **src** 目录中写 Vue 代码即可，其他的目录暂时不要动它

## src 目录结构的说明

```html
/assets           放置资源文件，比如：图片、css
/components       放项目中所有的组件
/router           路由配置
App.vue           根组件
main.js           项目的入口文件，Vue实例就是在这个文件中创建的
```

## Vue 不同构建版本的说明

- 1 完整版（运行时+编译器）
- 2 运行时（体积比完整版小 30%）
- 3 `import Vue from 'vue'` 默认导入的是：运行时版本
- 4 如果要使用完整版，需要在 webpack 中添加一个 alias 配置才可以
  - `build/webpack.base.conf.js` 中 resolve 的 alias

```js
// 完整版：
new Vue({
  el: '#app',
  router,

  // 脚手架生成的项目中，默认采用完整版（运行时+编译器）
  components: { App },
  template: '<App/>'
})
```

```js
// 运行时版：
const vm = new Vue({
  el: '#app',
  data: {},

  render: c => c(App)
})
```

## @符号的说明

- 在 vue cli 生成的项目中 `@` 符号就表示 `src` 路径
