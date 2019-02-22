import QuoteService from "./components/quote/quote-service.js";
import ImageService from "./components/image/image-service.js";
import WeatherService from "./components/weather/weather-service.js"
import TodoService from "./components/todo/todo-service.js"

//PRIVATE
let _state = {
  images: [],
  quote: {},
  todos: [],
  weather: {}
}

let _subscribers = {
  images: [],
  quote: [],
  todos: [],
  weather: [],
}

function setState(prop, value) {
  console.log('setting state', prop, value);
  _state[prop] = value
  _subscribers[prop].forEach(fn => fn());
}

//PUBLIC
export default class Store {

  static addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  static get Todos() {
    return _state.todos
  }

  static get Weather() {
    return _state.weather
  }

  static get Images() {
    return _state.images
  }

  static get Quote() {
    return _state.quote
  }

  static async getQuote() {
    setState('quote', await QuoteService.GetQuote())
  }

  static async getImages() {
    ImageService.getImages()
      .then(images => setState('images', images.images))
  }

  //Todo Actions
  static async getTodos() {
    setState('todos', await TodoService.getTodos())
  }
  static async addTodo(payload) {
    setState('todos', await TodoService.addTodo(payload))
  }
  static async toggleTodoStatus(todoId, todo) {
    setState('todos', await TodoService.toggleTodoStatus(todoId, todo))
  }

  static async deleteTodo(todoId) {
    setState('todos', await TodoService.removeTodo(todoId))
  }

  static async getWeather() {
    setState('weather', await WeatherService.getWeather())
  }

  static async init() {
    this.getQuote()
    this.getImages()
    this.getTodos()
    this.getWeather()
  }

}