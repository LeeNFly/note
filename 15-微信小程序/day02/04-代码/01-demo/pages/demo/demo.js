// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 1, name: '吃饭' },
      { id: 2, name: '睡觉' },
      { id: 3, name: '打豆豆' }
    ]
  },
  add () {
    // 给data的list数组添加一条数据
    this.data.list.push({
      id: 4,
      name: '干嘛'
    })

    this.setData(this.data)
  },

  // 1. 给view注册一个点击事件
  // 2. 准备一个对应的方法
  // 3. 获取到要删除的id值
  // 4. 让list删除对应的那项数据
  // 5. 调用setData
  del (e) {
    let id = e.currentTarget.dataset.id
    // 获取下标
    let idx = this.data.list.findIndex(item => item.id === id)
    // 删除对应的数据
    this.data.list.splice(idx, 1)
    // 同步
    this.setData(this.data)
  }
})