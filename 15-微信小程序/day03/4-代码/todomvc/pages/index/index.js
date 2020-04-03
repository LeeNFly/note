/*
  删除功能：
    1. 给删除的按钮注册一个点击事件
    2. 需要在page中提供一个对应的方法
    3. 获取到需要删除的任务的id值
    4. 根据data中的list查找到需要删除的下标
    5. 根据下标删除list中对应的数据
    6. 调用setData方法同步

  切换任务状态的功能
    1. 给切换按钮注册一个点击事件
    2. 在page中提供一个对应的方法
    3. 获取到切换的任务的id
    4. 根据data中的list查找到需要删除的下标
    5. 修改对应下标的任务的状态  取反
    6. 同步数据

  切换所有任务的状态
    1. 给toggle all注册事件
    2. 在page中提供一个对应的方法
    3. 判断
      如果所有的任务都选中了，应该让所有的任务都不选中
      如果有任务没选中， 应该让所有的任务都选中即可
    4. 同步

  添加任务
    1. 实现数据的双向数据绑定
      1.1 给文本框注册一个 input事件
      1.2 获取到文本框的值
      1.3 修改name的值即可
      1.4 同步
  清除已经完成的任务
    1. 给清除任务的按钮注册点击事件
    2. 在page中提供一个方法，用于清除任务
    3. 在方法中，把已经完成的任务（completed为true的任务）清除掉
    4. 同步
  
  显示剩余未完成的任务
    1. 在data中提供一个数据，统计剩余未完成任务的个数
    2. 动态的修改leftCount的值，leftCount统计的是list中所有的completed为false的个数
    3. 在所有会改变list数组的地方，都应该调用setLeftCount
    4. 根据list的数组，获取到leftCount的值
  
  显示和隐藏清除已完成的按钮
    判断条件
      如果有已经完成的任务，清除按钮就可以显示出来
      如果没有已经完成的任务，清除按钮就应该隐藏
    由已经完成的任务的数量来控制

  使用小程序的存储 把数据进行持久化
    1. 当list中的数据发生了改变， 就需要把list中的数据存储起来
    2. 我们获取list数据的时候，从存储中获取即可
*/

Page({

  // 提供数据
  data: {
    name: '', // 任务的名字
    leftCount: 0,
    list: [],
    index: 0
  },
  // onLoad / onReay / onShow
  onShow () {
    // 页面加载的时候，应该去storage中获取数据
    this.data.list = wx.getStorageSync('todos') || []
    if (this.data.list.length > 0) {
      this.data.index = this.data.list[this.data.list.length - 1].id
    } else {
      this.data.index = 0
    }
    this.setData(this.data)
    // 同步leftCount
    this.setLeftCount()
  },
  // 删除任务
  delTodo (e) {
    // 通过事件对象获取到当前元素，获取到dataset
    let id = e.currentTarget.dataset.id
    
    // 通过id获取下标
    let index = this.data.list.findIndex(item => item.id === id)

    // 根据下标来删除对应的任务
    this.data.list.splice(index, 1)

    // 同步
    this.setData(this.data)

    // 同步leftCount
    this.setLeftCount()

    // 数据存储
    this.save()
  },
  // 改变任务的状态
  change (e) {
    let id = e.currentTarget.dataset.id
    let index = this.data.list.findIndex(item => item.id === id)
    this.data.list[index].completed = !this.data.list[index].completed
    // 同步
    this.setData(this.data)

    // 同步leftCount
    this.setLeftCount()

    // 数据存储
    this.save()
  },
  // 切换所有任务的选中状态
  toggleAll () {
    // 只要有一个或者多个没有完成任务， 让所有的任务都完成
    // 否则让所有的任务都不完成
    // flag:表示的是是否有任务没有完成
    let flag = this.data.list.some(item => !item.completed)
    this.data.list.forEach(item => item.completed = flag)
    this.setData(this.data)

    // 同步leftCount
    this.setLeftCount()
 
    // 数据存储
    this.save()
  },
  getName (e) {
    // 获取到文本框的value值
    this.data.name = e.detail.value
    this.setData(this.data)
  },
  addTodo() {
    // 把name的数据添加成一个新的任务
    this.data.list.push({
      id: ++this.data.index,
      name: this.data.name,
      completed: false
    })
    // 清空data中的name属性
    this.data.name = ''
    // 同步
    this.setData(this.data)

    // 同步leftCount
    this.setLeftCount()

    // 数据存储
    this.save()
  },

  // 清除已经完成的任务
  clearCompleted () {
    // 把已经完成的任务给清除掉(去掉completed为true的任务)
    // 只需要保留未完成的任务（completed为false的任务）
    this.data.list = this.data.list.filter(item => !item.completed)
    // 数据的同步
    this.setData(this.data)

    // 同步leftCount
    this.setLeftCount()

    // 数据存储
    this.save()
  },
  // 动态的修改leftCount的值
  setLeftCount () {
    // leftCount的值只会和list相关
    // 统计list中未完成的任务的个数即可
    this.data.leftCount = this.data.list.filter(item => !item.completed).length
    // 同步leftCount数据
    this.setData(this.data)
  },
  // 把数据存储到小程序的storage中
  // 在小程序中，允许直接存对象的
  save () {
    wx.setStorageSync('todos', this.data.list)
  }

})