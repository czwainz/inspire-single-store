//PRIVATE
//IMAGES
const imageUrl = '//bcw-getter.herokuapp.com/?url=';
const imageUrl2 = 'http://www.splashbase.co/api/v1/images/search?query=mountains'
const imageApiUrl = imageUrl + encodeURIComponent(imageUrl2);


const imgApi = axios.create({
  baseURL: imageApiUrl,
  timeout: 3000
});

//QUOTES 
let quoteUrl = '//bcw-getter.herokuapp.com/?url=';
let quoteUrl2 = 'https://favqs.com/api/qotd';
let quoteApiUrl = quoteUrl + encodeURIComponent(quoteUrl2);
//Do Not Edit above we have to go through the bcw-getter to access this api


const quoteApi = axios.create({
  baseURL: quoteApiUrl,
  timeout: 3000
});


//TODO
const todoApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/YOURNAME/todos/',
  timeout: 3000
});

//WEATHER
const weatherUrl = '//bcw-getter.herokuapp.com/?url=';
const weatherUrl2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
const weatherApiUrl = weatherUrl + encodeURIComponent(weatherUrl2);

const weatherApi = axios.create({
  baseURL: weatherApiUrl,
  timeout: 3000
});


//PUBLIC
export default class Store {
  //IMAGES
  getImage(callWhenDone) {
    // ^^^^^^^ How do you call this function?
    console.log("Looking for a good pic")
    imgApi().then(res => {
      console.log('Image Data:', res.data)
      callWhenDone(res.data)
    })
  }
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