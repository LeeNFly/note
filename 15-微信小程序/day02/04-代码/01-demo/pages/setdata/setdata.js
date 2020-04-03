// pages/setdata/setdata.js
Page({

  // 数据
  data: {
    msg: 'hello 小程序'
  },

  // 在方法中如何放到data中的数据？？
  // 大坑： 在微信小程序中，数据不是双向数据绑定
  // data中的数据发生了改变，视图中的数据并没有跟着变化。
  // 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
  change () {
    // 修改msg的值
    this.data.msg = '哈哈哈'
    // 记得做一次同步
    this.setData(this.data)
    // this.setData({
    //   msg: '哈哈哈'
    // })
  },
  input (e) {
    // 1. 这里应该获取到文本框的值
    // 2. 调用setData方法才修改data中的数据
    this.data.msg = e.detail.value
    this.setData(this.data)
  }

})

/**
 *  1. 如何获取到文本框的值
 *    通过e.detail.value
 *  
 *  2. 如果注册事件的时候，想要传递参数，给当前元素添加自定义属性，通过 e.currentTaget.dataset来获取值
 * 
 *  2. js中的data中发生了改变，页面中的数据并不会改变，如果想改变, 调用setData同步才行
 * 
 * 3. input框中的值发生了改变，js中的数据并不会跟着变，如果想跟着变，自己注册事件，自己修改data中的数据
 * 
 * 微信小程序不支持双向数据绑定
 * 
 */
