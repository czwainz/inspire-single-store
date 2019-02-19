//PRIVATE
//IMAGES

//QUOTES 
let _state = {
  images: {},
  quotes: {},
  todos: [],
  weather: {},
}

let _subscribers = []


//TODO

//WEATHER


//PUBLIC
export default class Store {
  //IMAGES

  //QUOTES 
  getQuote(callWhenDone) {
    console.log('looking for some good quotes')
    quoteApi().then((res) => {
      callWhenDone(res.data)
    })
  }

  //TODO
  getTodos(draw) {
    console.log("Getting the Todo List")
    todoApi.get('')
      .then((res) => { // <-- WHY IS THIS IMPORTANT????

      })
      .catch(logError)
  }

  addTodo(todo) {
    // WHAT IS THIS FOR???
    todoApi.post('', todo)
      .then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?

      })
      .catch(logError)
  }

  toggleTodoStatus(todoId) {
    // MAKE SURE WE THINK THIS ONE THROUGH
    //STEP 1: Find the todo by its index **HINT** todoList

    var todo = {} ///MODIFY THIS LINE

    //STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
    todoApi.put(todoId, todo)
      .then(function (res) {
        //DO YOU WANT TO DO ANYTHING WITH THIS?
      })
      .catch(logError)
  }

  removeTodo() {
    // Umm this one is on you to write.... The method is a DELETE

  }

  //WEATHER
  getWeather(callWhenDone) {
    console.log('Calling the Weatherman')
    weatherApi().then(function (res) {
      // HEY FUN FACT 
      // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
      // res.data.temp is the temperature in Kelvin
      // You should probably convert the temperature data to either F or C
      callWhenDone(res.data);
    })
  }

}