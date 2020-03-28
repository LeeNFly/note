# Vue Cli 的说明

## 初始化项目报错

- 清除 npm 缓存文件：`npm cache clean --force`

## 如何关闭 ESLint 代码风格校验

- 在 `config/index.js` 中将 `useEslint` 设置为 false

## 自定义 ESLint 校验规则

- 在 `.eslintrc.js` 中添加 `'space-before-function-paren': 'off'` 关闭 方法名字后的空格校验规则
- 前提：如果使用了老师的 VScode 配置（ prettier ）

## ★ 在webpack项目中, 采用模块化设计, 每一个js文件, 都是一个node模块(nodejs), 独立作用域等, 可以通过import语法替代之前的require, 来导入模块, 文件, 组件等, 导入后就可以在当前模块/组件中使用了, 每个模块可以多个文件导入, 使用多次

## 在webpack项目中, 每一个组件(.vue文件, 都是局部组件)也可以看作一个模块, 作用域独立, 也可以通过import来导入组件

## 导入.vue .js .json文件, 不需要加后缀名
因为在`config/webpack.base.config.js`中的resolve里配置了`extensions: ['.js', '.vue', '.json']`, 

## 目录结构的总结

- 只需要在 **src** 目录中写 Vue 代码即可，其他的目录暂时不要动它

## src 目录结构的说明

```html
/assets           放置资源文件，比如：图片、css
/components       放项目中所有的组件 (根组件除外)
/router           路由配置
App.vue           根组件
main.js           项目的入口文件，Vue实例就是在这个文件中创建的
```

## Vue 不同构建版本的说明
vue的包dist下会有很多的vue.js版本,
UMD版本: 通过<script>标签直接引入使用
CommonJS版本: 老的打包工具使用, 比如Browserify, webpack1
ES Module版本: 新的打包工具使用, 比如webpack 2 或 Rollup

每个版本又分成完整版和运行时版

- 1 完整版（运行时+编译器）
- 2 运行时（体积比完整版小 30%）
- 3 入口文件中, `import Vue from 'vue'` 默认导入的是：运行时版本
- 4 如果要使用完整版，需要在 webpack 中添加一个 alias 配置才可以
  - `build/webpack.base.conf.js` 中 resolve 的 alias 设置为 `'vue$': 'vue/dist/vue.esm.js'`, 
  -  这样在入口文件中import Vue from 'vue' 引入的就是vue/dist/vue.esm.js, 就是完整版了
  
用vue-cli创建的项目默认使用完整版的(配置文件也自动帮我们配好了), 如果将来想使用编译版的, 怎么切换?
直接将入口文件中的vue实例创建中渲染组件的方式由
components: { App },
template: '<App/>'
切换成
 render: c => c(App)
 
```js
// 入口文件中若导入完整版, 则用以下方式创建vue实例：
new Vue({
  el: '#app',
  router,
  
  // 渲染组件方式
  // 脚手架生成的项目中，默认采用完整版（运行时+编译器）
  components: { App },
  template: '<App/>'
})
```

```js
// 入口文件中若导入运行时版, 则用以下方式创建vue实例：
const vm = new Vue({
  el: '#app',
  data: {},

  // 渲染组件方式
  render: c => c(App)
})
```

## @符号的说明
- 在`build/webpack.base.conf.js`中`resolve`的`alias`下可以看到 `'@': resolve('src')`
而resolve函数为
```
    function resolve (dir) {
      return path.join(__dirname, '..', dir) 
      // webpack.base.conf.js文件所在绝对路径目录 (实际上就是目录build的绝对路径) => ../ (到了项目根目录) => /src 
      // resolve('src'), 返回了 绝对路径...../src 这个字符串
    }
```
则 `'@': resolve('src')` 别名@就代表 绝对路径...../src 这个字符串
- 在 vue cli 生成的项目中 `@` 符号就表示 `src` 路径, 准确的说代表 绝对路径...../src 这个字符串
- 所以一般@之后要根/, 即@/../... 代表访问src目录下的文件
- ★ 可以把@就看作src
