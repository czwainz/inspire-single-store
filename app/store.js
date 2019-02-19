import QuoteService from "./components/quote/quote-service.js";
import ImageService from "./components/image/image-service.js";
import WeatherService from "./components/weather/weather-service.js"

//PRIVATE
let _state = {
  image: {},
  quote: {},
  todos: [],
  weather: {},
}

let _subscribers = {
  image: [],
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

  static get Image() {
    return _state.image
  }

  static get Quote() {
    return _state.quote
  }

  static async getQuote() {
    setState('quote', await QuoteService.GetQuote())
  }

  static async getImage() {
    ImageService.getImage()
      .then(image => setState('image', image))
  }

  //Todo Actions
  static async getTodos() {

  }
  static async addTodos() {

  }
  static async deleteTodo() {

  }

  static async getWeather() {
    setState('weather', await WeatherService.getWeather())
  }

  static async init() {
    this.getQuote()
    this.getImage()
    this.getTodos()
    this.getWeather()
  }

}