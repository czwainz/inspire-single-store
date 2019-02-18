import WeatherController from "./components/weather/weather-controller.js";
import Store from "./store.js"

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController()
    }
    this.store = {
      store: new Store()
    }
  }
}

window.app = new app()  