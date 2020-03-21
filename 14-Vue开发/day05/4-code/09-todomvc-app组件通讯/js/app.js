/*
	只要是数据发生改变，那么页面中的所有指令和表达式都会被重新计算一次（事件除外，事件只会在触发的时候才会执行）
*/

// header组件
const todoHeader = {
	template: `
		<header class="header">
			<h1>todos</h1>
			<input class="new-todo" placeholder="What needs to be done?" autofocus v-model="todoName" @keyup.enter="add">
		</header>
	`,

	data() {
		return {
			todoName: ''
		}
	},

	methods: {
		add() {
			if (this.todoName.trim() === '') {
				return
			}

			// 触发父组件的方法，将数据传递给父组件
			this.$emit('getname', this.todoName)

			this.todoName = ''
		}
	}
}

// list 组件
const todoList = {
	template: `
		<section class="main">
			<input id="toggle-all" class="toggle-all" type="checkbox">
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
				<!--
					完成的任务,添加  completed 类
					编辑状态, 添加 editing 类
				-->
				<li v-for="(item, index) in todos" :key="item.id" :class="{ completed: item.completed, editing: item.id === editId }">
					<div class="view">
						<!--
							v-model 用在 checkbox 中用来控制复选框的选中状态
						-->
						<input class="toggle" type="checkbox" v-model="item.completed">
						<label @dblclick="showEditStatus(item.id)">{{ item.name }}</label>
						<button class="destroy" @click="delTodo(index)"></button>
					</div>
					<input class="edit" v-model="item.name" @keyup.enter="update">
				</li>
			</ul>
		</section>
	`,

	// 接受到父组件中传递过来的数据
	props: ['todos'],

	data() {
		return {
			editId: -1,
			list: this.todos
		}
	},

	methods: {
		delTodo(index) {
			this.$emit('del', index)
			// this.todos = []
		},

		showEditStatus(id) {
			this.editId = id
		},

		update() {
			this.editId = -1
		}
	}
}

// footer 组件
const todoFooter = {
	template: `
		<footer class="footer" v-show="showfooter">
			<span class="todo-count"><strong v-text="count"></strong> item left</span>
			<ul class="filters">
				<li>
					<a class="selected" href="#/">All</a>
				</li>
				<li>
					<a href="#/active">Active</a>
				</li>
				<li>
					<a href="#/completed">Completed</a>
				</li>
			</ul>
			<button class="clear-completed" v-show="isshow" @click="delAllCompleted">Clear completed</button>
		</footer>
	`,

	props: ['showfooter', 'count', 'isshow'],

	methods: {
		delAllCompleted() {
			this.$emit('delallcompleted')
		}
	}
}

const vm = new Vue({
	el: '#app',
	data: {
		// 将todos数据交给父组件，子组件想要使用直接从父组件中获取就可以了
		todos: [
			{ id: 1, name: '抽烟', completed: true },
			{ id: 2, name: '喝酒', completed: false },
			{ id: 3, name: '烫头发', completed: false }
		]
	},

	methods: {
		// 接受到 header组件中传递过来的任务名称
		getAddTodoName(data) {
			const id =
				this.todos.length === 0 ? 1 : this.todos[this.todos.length - 1].id + 1

			this.todos.push({
				id,
				name: data,
				completed: false
			})
		},

		del(index) {
			this.todos.splice(index, 1)
		},

		// 清除所有已完成任务
		delAllCompleted() {
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
		},

		// 是否展示清除所有已完成任务按钮
		showClearCompleted() {
			return this.todos.some(item => item.completed)
		}
	},

	components: {
		'todo-header': todoHeader,
		'todo-list': todoList,
		'todo-footer': todoFooter
	}
})

// const vm = new Vue({
//   el: '#app',
//   data: {
//     // 任务名称
//     todoName: '',
//     editId: -1,
//     // 任务列表
//     todos: [
//       { id: 1, name: '抽烟', completed: true },
//       { id: 2, name: '喝酒', completed: false },
//       { id: 3, name: '烫头发', completed: false }
//     ]
//   },

//   methods: {
//     // 添加任务
//     add() {
//       /*
// 				1.1 添加完成后，清空文本框
// 				1.2 id 要计算出来，而不是写死
// 				1.3 非空值判断
// 			*/
//       if (this.todoName.trim() === '') {
//         return
//       }

//       let id =
// 				this.todos.length === 0 ? 1 : this.todos[this.todos.length - 1].id + 1

//       // if (this.todos.length === 0) {
//       //   id = 1
//       // } else {
//       //   id = this.todos[this.todos.length - 1].id + 1
//       // }

//       this.todos.push({
//         id,
//         name: this.todoName,
//         completed: false
//       })

//       this.todoName = ''
//     },

//     // 删除任务
//     delTodo(index) {
//       // console.log('del', index)
//       // 根据index删除数组元素
//       this.todos.splice(index, 1)
//     },

//     // 显示编辑状态
//     showEditStatus(id) {
//       this.editId = id
//     },

//     // 去掉编辑状态
//     updateTodo() {
//       this.editId = -1
//     },

//     // 清除所有已完成任务
//     delAllCompleted() {
//       // 思路转换一下：要删除已完成的任务，就是保留未完成的任务
//       // 所以，只需要 过滤 出未完成的任务即可
//       this.todos = this.todos.filter(item => !item.completed)
//     }
//   },

//   // 计算属性
//   computed: {
//     showFooter() {
//       return this.todos.length > 0
//     },

//     // 未完成任务数量
//     unCompletedCount() {
//       return this.todos.filter(item => !item.completed).length

//       // return this.todos.filter(function(item) {
//       //   return !item.completed
//       // }).length

//       /* let count = 0
//       for (var i = 0; i < this.todos.length; i++) {
//         if (!this.todos[i].completed) {
//           count++
//         }
//       }
//       return count */
//     },

//     // 是否展示清除所有已完成任务按钮
//     showClearCompleted() {
//       // 什么展示: 只要有一个任务是已完成就应该展示,也就是返回true

//       // some 方法也会遍历数组,分别为数组中的每一项来调用
//       // 回调函数
//       // 如果回调函数的返回值为false， 那么， 就会继续下一次循环
//       // 如果回调函数的返回值为true， 那么，就会停止循环，并且将 some 方法的返回值设置为 true
//       // 但是，如果所有项中没有一项返回true，最终，some方法的返回值为 false
//       return this.todos.some(item => item.completed)
//       // return this.todos.some(function(item) {
//       //   console.log('some')
//       //   return item.completed
//       // })
//     }
//   }
// })
