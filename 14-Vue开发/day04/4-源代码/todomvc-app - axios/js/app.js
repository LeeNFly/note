/*
	只要是数据发生改变，那么页面中的所有指令和表达式都会被重新计算一次（事件除外，事件只会在触发的时候才会执行）
*/
var axios

// eslint-disable-next-line
const vm = new Vue({
  el: '#app',
  data: {
    // 任务名称
    todoName: '',
    editId: -1,
    // 任务列表
    todos: []
  },

  // 进入页面，发送请求，获取数据
  mounted() {
    this.getTodos()
  },

  methods: {
    // 获取数据
    getTodos() {
      axios.get('http://localhost:3000/todos').then(res => {
        // console.log(res)
        this.todos = res.data
      })
    },

    // 添加任务
    add() {
      /*
				1.1 添加完成后，清空文本框
				1.2 id 要计算出来，而不是写死
				1.3 非空值判断
			*/
      if (this.todoName.trim() === '') {
        return
      }

      // 发送请求,添加数据
      axios
        .post('http://localhost:3000/todos', {
          name: this.todoName,
          completed: false
        })
        .then(res => {
          // console.log(res)

          // 添加完成后,重新获取数据
          this.getTodos()
          // this.todos.push({ ...res.data })
          this.todoName = ''
        })
    },

    // 删除任务
    delTodo(index, id) {
      // console.log('del', index)
      // 根据index删除数组元素
      axios.delete(`http://localhost:3000/todos/${id}`).then(res => {
        // console.log(res)
        this.todos.splice(index, 1)
      })
    },

    // 显示编辑状态
    showEditStatus(id) {
      this.editId = id
    },

    // 去掉编辑状态
    updateTodo(id) {
      // 获取到当前修改项的 name
      const name = this.todos.find(item => item.id === id).name

      axios
        .patch(`http://localhost:3000/todos/${id}`, {
          name
        })
        .then(res => {
          // console.log(res)
          this.editId = -1
        })
    },

    // 清除所有已完成任务
    delAllCompleted() {
      // 思路转换一下：要删除已完成的任务，就是保留未完成的任务
      // 所以，只需要 过滤 出未完成的任务即可
      this.todos = this.todos.filter(item => !item.completed)
    }
  },

  // 计算属性
  computed: {
    showFooter() {
      return this.todos.length > 0
    },

    // 未完成任务数量
    unCompletedCount() {
      return this.todos.filter(item => !item.completed).length

      // return this.todos.filter(function(item) {
      //   return !item.completed
      // }).length

      /* let count = 0
      for (var i = 0; i < this.todos.length; i++) {
        if (!this.todos[i].completed) {
          count++
        }
      }
      return count */
    },

    // 是否展示清除所有已完成任务按钮
    showClearCompleted() {
      // 什么展示: 只要有一个任务是已完成就应该展示,也就是返回true

      // some 方法也会遍历数组,分别为数组中的每一项来调用
      // 回调函数
      // 如果回调函数的返回值为false， 那么， 就会继续下一次循环
      // 如果回调函数的返回值为true， 那么，就会停止循环，并且将 some 方法的返回值设置为 true
      // 但是，如果所有项中没有一项返回true，最终，some方法的返回值为 false
      return this.todos.some(item => item.completed)
      // return this.todos.some(function(item) {
      //   console.log('some')
      //   return item.completed
      // })
    }
  }
})
