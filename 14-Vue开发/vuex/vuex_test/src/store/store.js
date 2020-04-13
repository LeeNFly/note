/*
 * @Author: Ling Hui Shi
 * @Date: 2020-04-13 21:34:34
 * @LastEditors: Ling Hui Shi
 * @LastEditTime: 2020-04-13 23:18:26
 * @Description:
 */
import Vue from 'vue' // 导入vue (vuex依赖于vue)
import Vuex from 'vuex' // 导入vuex

Vue.use(Vuex) // 按照vuex插件

// 创建并 导出store实例, 一个项目就只有一个store实例
export default new Vuex.Store({
  // state: 单一状态树, 用来存储数据的, 在项目中可以共用, 并且也支持数据变视图自动渲染功能
  state: {
    productList: [
      { name: '麻花疼', money: 100, id: 1 },
      { name: '马云', money: 200, id: 2 },
      { name: '东哥', money: 300, id: 3 },
      { name: '大佬', money: 400, id: 4 }
    ]
  },
  // getters: 用来获取属性, 与计算属性类似, 当作属性来使用, 值为函数中的返回值, 并且会监听和自动更新数据 和 视图, 也有缓存机制
  getters: {
    saleProducts (state) {
      return state.productList.map(item => {
        item.money /= 2
        return item
      })
    }
  },
  // mutations: 类似于事件, 可以在项目中通过commit来触发, 来调用对应的mutations中的函数 不能包含异步操作
  mutations: {
    add (state, num) {
      console.log(num)
      // eslint-disable-next-line no-return-assign
      state.productList.forEach(product => product.money += num)
    }
  },
  // 类似于事件, 可以在项目中通过dispatch来触发 (分发), 来调用对应的actions中的函数
  actions: {
    addAction (context, num) {
      console.log(num)
      // context: 类似于store实例
      // console.log(context)
      // context.commit('add')
      // setTimeout(() => {
      context.commit('add', num)
      // }, 3000)
    }
  }
})
