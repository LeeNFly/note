import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
import Users from '@/components/Users/Users'
import Rights from '@/components/rights/Rights'
import Roles from '@/components/roles/Roles'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [{
      path: 'users',
      component: Users
    },
    {
      path: 'rights',
      component: Rights
    },
    {
      path: 'roles',
      component: Roles
    }
    ]
  }
  ]
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
  if (to.path.endsWith('login')) {
    next()
  } else {
    const token = localStorage.getItem('shop_admin_token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
