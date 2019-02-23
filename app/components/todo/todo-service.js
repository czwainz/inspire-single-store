const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/CHRISSYZ/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}

export default class TodoService {

	static getTodos() {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => {
				console.log('todo', res.data.data)
				return res.data.data
			})
			.catch(logError)
	}

	static addTodo(todo) {
		todoApi.post('', todo)
			.then(function (res) {
				debugger // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				TodoService.getTodos()
			})
			.catch(logError)
	}

	static toggleTodoStatus(todoId, todo) {
		todoApi.put(todoId, todo)
			.then(function (res) {


			})
			.catch(logError)

	}

	static removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(res => {

			})


	}

}
