// 每一个页面都应该调用一次Page方法
// Page方法用来创建一个小程序的页面


//1. data： 提供页面中存在的数据
//2. 自定义的一些方法， 一般用来注册事件的
//3. 钩子函数（页面的生命周期函数）
Page({
  // 页面加载的时候会执行onLoad, 一次
  onLoad () {
    console.log('onLoad', '页面加载了')
  },
  onReady() {
    console.log('onReady', '页面准备好了执行')
    wx.setNavigationBarTitle({
      title: '哈哈'
    })
  },
  onShow () {
    // 发送ajax
    console.log('onShow', '页面显示的时候就会执行')
  },
  onHide () {
    console.log('onHide', '页面隐藏的时候就会执行')
  },
  onUnload() {
    console.log('onUnload', '页面卸载了')
  }
  
})