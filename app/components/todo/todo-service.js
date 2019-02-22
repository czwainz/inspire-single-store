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
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				let data = res.data.data
				return data
			})
			.catch(logError)
	}

	static toggleTodoStatus(todoId, todo) {

		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?

			})
			.catch(logError)

	}

	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(res => {

			})
		// Umm this one is on you to write.... The method is a DELETE

	}

}
