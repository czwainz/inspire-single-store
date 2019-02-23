import Store from "../../store.js"

function getTodos() {
	Store.getTodos()
}

function draw() {
	let todos = Store.Todos
	console.log('tododoo', todos)
	var template = ''
	for (let i = 0; i < todos.length; i++) {
		let todo = todos[i];
		template += `
			<div class="col-4 card">
				<h3>${todo.description}</h3>
				<i class="fas fa-dumpster-fire"></i>
			</div>
		`
	}
	document.querySelector('#todos').innerHTML = template
}


export default class TodoController {
	constructor() {
		Store.addSubscriber('todos', draw)
		Store.getTodos()
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(event) {
		event.preventDefault()
		var form = event.target
		var todo = {
			description: form.description.value
		}

		Store.addTodo(todo)
		Store.getTodos()

	}

	toggleTodoStatus(todoId, todo) {
		Store.toggleTodoStatus(todoId, todo)
	}

	removeTodo(todoId) {
		Store.deleteTodo(todoId)
	}



}
