/*
 * @Author: Ling Hui Shi
 * @Date: 2018-09-21 22:22:40
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-13 19:04:36
 * @Description:
 */
import Vue from 'vue'
import Router from 'vue-router'

// 先将组件导入, 之后就可以在路由中使用了. 相当于导入了组件的vue实例

// 导入 Login 组件（注意，不要添加 .vue 后缀）
import Login from '@/components/login/Login'
// 导入首页组件
import Home from '@/components/home/Home'
// 导入用户列表组件
import Users from '@/components/users/Users'
// 导入权限列表组件
import Rights from '@/components/rights/Rights'
// 导入角色列表组件
import Roles from '@/components/roles/Roles'

// 安装路由插件，在 webpack 这样的模块化系统中，必须执行这一步
Vue.use(Router)

const router = new Router({
  routes: [
    // children 用来配置子路由，将来匹配的组件会展示在 Home 组件的 router-view 中
    {
      path: '/home',
      component: Home,
      children: [
        { path: 'users', component: Users },
        { path: 'rights', component: Rights },
        { path: 'roles', component: Roles }
      ]
    },
    { path: '/login', component: Login }
  ]
})

// 全局导航守卫
// 所有的路由都会先走守卫
// 添加导航守卫之后，不管是访问哪个路由(包括路由跳转)，都会执行beforeEach回调函数中的代码
// 前提是URL路径中#锚点有匹配的路由规则, 只有匹配了路由规则, 才会先执行这个回调函数; 如果没有匹配的路由规则, 则路由不生效, 这个回调函数也不会执行
// 只要是访问路由, 匹配路由规则后, 都会先执行这个回调函数, 然后在回调函数中通过next决定是否渲染组件
// 因为所有的路由，都会经过该导航守卫，所以，就可以在这个导航守卫的回调函数中,
// 判断有没有登录了, 然后再决定是否放行

// 如果没有配置全局守卫, 则访问哪个路由, 就直接展示哪个路由

router.beforeEach((to, from, next) => {
  // 注意, 在回调函数中, 只有执行了放行next(), 路由才会继续往下走, 即页面路由出口处才会展示匹配的路由对应的组件, 如果没有执行next(), 即在这个回调函数中没有放行, 则页面路由出口处什么都不展示
  // next(), 不传参数放行, 则页面直接展示当前URL路径#锚点匹配的那个路由规则对应的组件, ★ 且不会再执行这个回调函数了
  // 如果传了参数(路由规则), 则中断当前路由, 相当于重定向到对应路由, 并且会改变URL地址中的锚点部分, ★★★ 然后再重新执行一次beforeEach这个回调函数
  // console.log('导航守卫在看门', to)
  // ...

  if (to.path === '/login') {
    // to.path, 要去的那个路由的规则. (这里请使用to来, 不要使用location.hash来判断)
    // 如果访问的是login页面，直接放行，也就是任何人不管有没有登录
    // 都可以访问登录页面
    // 直接调用 next() 方法，表示：访问的是哪个页面，就展示这个页面的内容
    next()
  } else {
    // 访问的不是登录页面

    // 判断用户是否登录成功，
    // 1 当用户登录成功，直接调用 next() 方法放行
    // 2 当用户没有登录，应该调用 next('/login') 跳转到登录页面，让用户登录

    // 通过登录成功时候保存的token，来作为有没有登录成功的条件
    const token = localStorage.getItem('token')
    if (token) {
      // 有，登录成功
      next()
    } else {
      // 没有，登录失败
      next('/login')
    }
  }
})

export default router
