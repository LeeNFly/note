// App方法调用，就会创建一个小程序的实例
App({

  // 小程序初始化的时候执行的钩子函数，全局只会触发一次
  // 小程序中一次性的操作都可以放到onLaunch
  // 登录   获取你的用户信息
  onLaunch () {
    console.log('onLaunch', '小程序初始化好了')
  },

  // 只要小程序显示出来了，就会执行
  onShow () {
    console.log('onShow', '小程序显示了')
  },
  onHide () {
    console.log('onHide', '小程序隐藏的时候触发')
  },
  onError( ) {
    // 可以把错误的信息收集起来，放到数据库
    console.log("报错啦")
  }

})
