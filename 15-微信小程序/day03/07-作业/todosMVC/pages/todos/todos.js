// pages/todos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todosList: [],
    todoName: '',
    compeletedTodosCount: 0
  },
    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // wx.setStorageSync('todosList', [{name: '吃饭', id: 1, compeleted: true}, {name: '睡觉', id: 2, compeleted: false}, {name: '写代码', id: 3, compeleted: true}])
    this.getTodosList()
  },
  getTodosList () {
    const todosList = wx.getStorageSync('todosList') 
    this.data.todosList = todosList
    this.setData({
      todosList
    })
    this.setCompeletedTodosCount()
  },
  delTodosById(e) {
    const { todosList } = this.data
    const todoId = e.target.dataset.id
    const idx = todosList.findIndex(item => item.id === todoId)
    todosList.splice(idx, 1) 
    this.setCompeletedTodosCount()
    wx.setStorageSync('todosList', todosList)
    this.setData({
      todosList
    }) 
  },
  changeTodosState (e) {
    const { todosList } = this.data
    const todoId = e.target.dataset.id
    const idx = todosList.findIndex(item => item.id === todoId)
    todosList[idx].compeleted = !todosList[idx].compeleted
    this.setCompeletedTodosCount()
    wx.setStorageSync('todosList', todosList)
    this.setData({
      todosList
    })
  },
  toggleAllTodos () {
    const { todosList } = this.data 
    const hasCompeletedTodo = todosList.some(item => !item.compeleted)
    todosList.forEach(item => item.compeleted = hasCompeletedTodo)
    this.setCompeletedTodosCount()
    wx.setStorageSync('todosList', todosList)
    this.setData({
      todosList
    })
  },
  todoNameChange (e) {
    this.setData({
      todoName: e.detail.value
    })
  },
  addTodo () {
    const { todosList, todoName } = this.data
    let id = ''
    if (todosList.length > 0) {
      todosList[todosList.length - 1].id + 1
    } else {
      id = 1
    }
    todosList.push({ name: todoName, id, compeleted: false})
    this.setCompeletedTodosCount()
    wx.setStorageSync('todosList', todosList)
    this.setData({
      todosList,
      todoName: ''
    })
  },
  setCompeletedTodosCount() {
    const { todosList } = this.data
    const compeletedTodos = todosList.filter(item => item.compeleted)
    this.setData({
      compeletedTodosCount: compeletedTodos.length
    })  
  },
  clearCompeletedTodos () {
    const { todosList } = this.data
    const unCompeletedTodos = todosList.filter(item => !item.compeleted)
    this.data.todosList = unCompeletedTodos
    wx.setStorageSync('todosList', unCompeletedTodos)
    this.setCompeletedTodosCount()
    this.setData({
      todosList: unCompeletedTodos 
    }) 
  }

})