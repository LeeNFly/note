(function (window) {
	new Vue({
		el: '#app',
		created() {
			this.getTodosList()
		},
		data: {
			todosList: [],
			todoName: '',
			updateTodoId: ''
		},
		methods: {
			getTodosList() {
				axios.get('http://localhost:3000/todos').then((info) => {
					console.log(info.data);
					this.todosList = info.data
				})
			},
			addTodos() {
				axios.post('http://localhost:3000/todos', {
					name: this.todoName,
					completed: false
				}).then((info) => {
					console.log(info.data);
					this.todoName = ''
					this.getTodosList()
				})
			},
			delTodo(todoId) {
				axios.delete(`http://localhost:3000/todos/${todoId}`).then((info) => {
					console.log(info.data);
					this.getTodosList()
				})
			},
			setUpdateTodos(todoId) {
				console.log('111')
				this.updateTodoId = todoId
			},
			updateTodo() {
				const index = this.todosList.findIndex(item => this.updateTodoId === item.id)
				axios.patch(`http://localhost:3000/todos/${this.updateTodoId}`, {
					name: this.todosList[index].name,
					completed: this.todosList[index].completed
				}).then((info) => {
					this.updateTodoId = ''
					this.getTodosList()
				})
			},
			clearCompletedTodos() {
				this.todosList = this.todosList.filter(item => !item.completed)
			}
		},
		computed: {
			uncompletedNum() {
				return this.todosList.filter(item => !item.completed).length
			},
			showClearCompleted() {
				return this.todosList.filter(item => item.completed).length > 0
			}
		}
	})

})(window);
