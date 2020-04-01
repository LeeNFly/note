// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/index.less'
import axios from 'axios'
Vue.config.productionTip = false

// axios添加到Vue构造函数原型上, 供所有vue实例使用
Vue.prototype.$http = axios
// 使用element-UI插件
Vue.use(ElementUI)

// axios基础路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'
// axios请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.Authorization = localStorage.getItem('shop_admin_token')
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  const { meta } = response.data
  if (meta.status === 401) {
    localStorage.removeItem('shop_admin_token')
    router.push('/login')
  }
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
