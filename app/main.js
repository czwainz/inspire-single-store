import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js";
import QuoteController from "./components/quote/quote-controller.js"
import TodoController from "./components/todo/todo-controller.js"

import Store from "./store.js"

let store = new Store()
// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(store),
      imageController: new ImageController(store),
      quoteController: new QuoteController(store),
      todoController: new TodoController(store)
    }

  }
}

window.app = new app()  