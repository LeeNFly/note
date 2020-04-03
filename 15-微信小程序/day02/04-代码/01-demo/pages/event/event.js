// pages/event/event.js
Page({

  // 提供了页面需要使用数据
  data: {
    list: [
      {id:1, name:'zs'},
      { id: 2, name: 'ls' },
      { id: 3, name: 'ww' },
    ]
  },
  // 微信小程序中的方法直接写在这个对象中
  fn () {
    console.log("哈哈")
  },
  parentFn () {
    console.log("这是父元素的事件")
  },
  del(e) {
    // 如何获取到删除的id
    // 通过事件对象的 e.currentTaget可以获取到当前元素
    // 可以通过当前元素的 dataset属性获取到自定义属性
    console.log(e.currentTarget.dataset)
  }

})