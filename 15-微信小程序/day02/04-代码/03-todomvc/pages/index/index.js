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
*/

Page({

  // 提供数据
  data: {
    name: '', // 任务的名字
    list: [
      { id: 1, name: '今天吃了没', completed: true },
      { id: 2, name: '今天喝了没', completed: true },
      { id: 3, name: '今天敲了没', completed: false },
    ],
    index: 3
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
  },
  // 改变任务的状态
  change (e) {
    let id = e.currentTarget.dataset.id
    let index = this.data.list.findIndex(item => item.id === id)
    this.data.list[index].completed = !this.data.list[index].completed
    // 同步
    this.setData(this.data)
  },
  // 切换所有任务的选中状态
  toggleAll1 () {
    // 判断所有的任务是否都选中
    // every: 所有的function都返回了true，整体的结果就是true
    // some: 只要有要一个任务返回了true，结果就是true 
    // 只要有任务没完成， 把所有的任务都改成完成

    // 判断任务是否都完成
    let flag = this.data.list.every(item => item.completed)
    // if (flag) {
    //   // 如果任务都完成了， 把所有的任务都改成未完成
    //   this.data.list.forEach(item => item.completed = false)
    // } else {
    //   this.data.list.forEach(item => item.completed = true)
    // }
    this.data.list.forEach(item => item.completed = !flag)
    this.setData(this.data)
  },
  // 切换所有任务的选中状态
  toggleAll () {
    // 只要有一个或者多个没有完成任务， 让所有的任务都完成
    // 否则让所有的任务都不完成
    // flag:表示的是是否有任务没有完成
    let flag = this.data.list.some(item => !item.completed)
    this.data.list.forEach(item => item.completed = flag)
    this.setData(this.data)
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
  }

})