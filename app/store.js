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
  static async addTodos(payload) {
    setState('todos', await TodoService.AddTodo(payload))
  }
  static async toggleTodoStatus(todoId) {
    setState('todos', await TodoService.toggleTodoStatus(todoId))
  }

  static async deleteTodo(todoId) {
    setState('todos', await TodoService.DeleteTodo(todoId))
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