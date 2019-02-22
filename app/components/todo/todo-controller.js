import Store from "../../store.js"

function getTodos() {
	Store.getTodos()
}

function draw(todos) {

	var template = ''
	for (let i = 0; i < todos.length; i++) {
		let todo = todos[i];
		template += `
			<div class="col-4 card">
				<h3>${todo}</h3>
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
		event.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = event.target
		var todo = {
			description: form.description.value

		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		Store.addTodo(todo)
		Store.getTodos()
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId, todo) {
		// asks the service to edit the todo status
		Store.toggleTodoStatus(todoId, todo)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		Store.deleteTodo(todoId)
		// ask the service to run the remove todo with this id

		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}
