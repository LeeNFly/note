import fetch from '../../utils/fetch'
import regeneratorRuntime from '../../utils/runtime'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shopInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad (query) {
    const res = await fetch(`/shops/${query.id}`)
    this.setData({
      shopInfo: res.data
    })
  },
  previewImage (e) {
    let { url, urls } = e.target.dataset
    url = url.replace('w.h', '1100.1100')
    urls = urls.map(item => item.replace('w.h', '1100.1100'))
    wx.previewImage({
      urls,
      url
    })
  }
})