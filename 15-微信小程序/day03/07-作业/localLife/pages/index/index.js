//index.js
//获取应用实例
import fetch from '../../utils/fetch'
// import { fetch } from '../../utils/fetch'
import regeneratorRuntime from '../../utils/runtime'
const app = getApp()

Page({
  data: {
    bannerList: [],
    categoryList: []
  },
  async onShow () {
    // 获取轮播图数据
    const slides = await fetch('/slides')
    // 获取九宫格数据
    const categories = await fetch('/categories')
    this.setData({
      bannerList: slides.data,
      categoryList: categories.data
    })
  }
})
