/*
 * @Author: Ling Hui Shi
 * @Date: 2020-04-13 18:47:37
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-13 19:15:25
 * @Description:
 */
import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/components/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Product
    }
  ]
})
