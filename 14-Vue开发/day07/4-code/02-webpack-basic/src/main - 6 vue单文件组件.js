// Vue中的单文件组件

/*
  准备: 安装vue: npm install vue -D
  处理 Vue 中的单文件组件：
  单文件组件以.vue结尾, 需要被预编译后才能被浏览器识别和使用 依赖于 vue-loader 和 vue-template-compiler
  单文件组件说明详细请看 App.vue

  1 安装：npm i -D vue-loader vue-template-compiler
  2 在 webpack.config.js 中 module模块的rule中添加一个规则,
  3 在 webpack.config.js 引入 VueLoaderPlugin 模块
  3 在 webpack.config.js中 plugins配置中, 添加插件 VueLoaderPlugin
  4 创建一个 App.vue 以.vue为后缀的单文件组件
  5 单文件组件有三个组成部分： template / script / style
  6 在 main.js 入口中导入vue
  7 在 main.js 入口中导入这个单文件组件
  7 创建 vue实例 , 在vue实例中通过 render 方法来渲染这个组件

  以上这些步骤只需要配置一次即可. 将来整个页面就只有这个一个vue实例 (单页应用程序)
  将来项目中所有的vue组件, 都是这一个vue实例的组件, 都挂载在这个vue实例中,
  我们通过路由来控制这一个vue实例中要展示的内容, 即要展示哪一个组件 (路由只能有一个出口, 并且将符合路由的组件在出口处替换覆盖展示)
*/

// 1 导入Vue (相当于引入vue.js)
import Vue from 'vue'

// 3 导入创建好的单文件组件
import App from './App.vue'

// 2 创建Vue实例
const vm = new Vue({
  el: '#app',
  data: {},

  // 4 渲染组件
  // render: function(createElement) {
  //   return createElement(App)
  // }
  // render: (createElement) => {
  //   return createElement(App)
  // }
  // render: (c) => {
  //   return c(App)
  // }
  render: c => c(App)
})
