// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入全局样式
import '@/assets/index.css'

// 导入elementui - js
import ElementUI from 'element-ui'
// 导入elementui - css
import 'element-ui/lib/theme-chalk/index.css'
// 导入axios
import axios from 'axios'

// 配置公共路径
// 配置好公共路径后, 每次使用 axios 发送请求, 只需要写当前接口的路径(比如: /users) 就可以了
// axios 在发送请求之前, 会将 baseUrl + '/users' 得到完整路径, 才会发送请求
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'

// 只要配置了拦击器, 那么所有的请求都会走拦截器
// 因此,可以在拦截器中统一处理 headers

// 请求拦截器
axios.interceptors.request.use(function(config) {
  // 在请求发送之前做一些事情
  // endsWith 字符串的方法,用来判断是不是以参数为结尾,如果是返回值为true

  // 判断如果是登录接口,就不需要添加 Authorization 请求头
  if (!config.url.endsWith('/login')) {
    config.headers['Authorization'] = localStorage.getItem('token')
  }
  // console.log('请求拦截器', config)
  return config
})

// 响应拦截器
axios.interceptors.response.use(function(response) {
  // 在获取到响应数据的时候做一些事情
  // console.log('响应拦截器', response)
  if (response.data.meta.status === 401) {
    // 因为现在不是在组件中,因此无法通过 this.$router 来访问到路由实例
    // 但是，可以直接通过上面导入的路由模块中的 router （路由实例）来访问到路由对象
    router.push('/login')
    localStorage.removeItem('token')
  }

  return response
})

// 将 axios 添加到Vue的原型中
// 实例对象可以直接使用原型对象中的属性或方法
// 所有的组件都是Vue的实例
// 说明: 只要是像 axios 这样的第三方库(与Vue没有任何关系),都应该通过这种方式来统一导入
Vue.prototype.$http = axios

// 安装插件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  // 注册 App 组件为当前实例的局部组件，然后，才可以在template中使用该组件
  components: { App },
  template: '<App/>'
})
