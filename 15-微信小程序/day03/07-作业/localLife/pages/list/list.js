import fetch from '../../utils/fetch'
import regeneratorRuntime from '../../utils/runtime'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shopsList: [],
    pageSize: 10,
    curPage: 1,
    cateId: '',
    loadCompeleted: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad (query) {
    this.data.cateId = query.id
    const { pageSize, cateId, curPage } = this.data
    const res = await fetch(`/categories/${ cateId }/shops?_page=${curPage}&_limit=${pageSize}`)
    this.setData({
      shopsList: res.data
    })
    const resData = await fetch(`/categories/${ cateId }`)
    wx.setNavigationBarTitle({
      title: resData.data.name
    })
  },
  async onReachBottom () {
    let { shopsList, pageSize, cateId, curPage, loadCompeleted } = this.data
    if (loadCompeleted) {
      return
    }
    curPage++
    const res = await fetch(`/categories/${ cateId }/shops?_page=${curPage}&_limit=${pageSize}`)
    if (res.data.length === 0) {
      this.setData({
        loadCompeleted: true
      })
      return
    }
    shopsList = [...shopsList, ...res.data]
    this.setData({
      shopsList,
      curPage
    })
  },
  async onPullDownRefresh () {
    const { pageSize, cateId } = this.data
    const res = await fetch(`/categories/${ cateId }/shops?_page=1&_limit=${pageSize}`)
    this.setData({
      shopsList: res.data,
      curPage: 1
    })
  }
})