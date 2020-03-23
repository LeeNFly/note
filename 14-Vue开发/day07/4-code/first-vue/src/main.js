// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 关闭生成提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  // 脚手架生成的项目中，默认采用完整版（运行时+编译器）
  components: { App },
  template: '<App/>'
})
