import Vue from 'vue'
import Router from 'vue-router'

// 先将组件导入, 之后就可以在路由中使用了. 相当于导入了组件的vue实例

// 导入组件
import HelloWorld from '@/components/HelloWorld'

// 安装路由插件，在 webpack 这样的模块化系统中，必须执行这一步
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
