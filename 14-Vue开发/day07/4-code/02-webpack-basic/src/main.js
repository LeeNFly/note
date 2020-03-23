// Vue中的单文件组件

/* 
  处理 Vue 中的单文件组件：
  
  1 安装：npm i -D vue-loader vue-template-compiler
  2 在 webpack.config.js 中添加一个 rule
  3 还需要额外的添加一个插件 VueLoaderPlugin

  4 创建一个 App.vue 以.vue为后缀的单文件组件
  5 单文件组件有三个组成部分： template / script / style
  6 在 main.js 入口中导入这个单文件组件
  7 在 vue实例 中，通过 render 方法来渲染这个组件
*/

// 1 导入Vue
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
