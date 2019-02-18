import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()
let _store

export default class WeatherController {

	constructor(store) {
		//this will fire off get weather right away
		_store = store
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			console.log(weather);
			//What can you do with this weather object?
		})
	}
}
