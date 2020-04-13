/*
 * @Author: Ling Hui Shi
 * @Date: 2020-04-13 18:47:37
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-13 21:41:26
 * @Description:
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
