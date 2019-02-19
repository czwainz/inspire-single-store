import Store from "../../store.js";



function draw() {
	// console.log('tempy temp', Store.Weather)
	let kTemp = Store.Weather.main.temp
	let fTemp = Math.ceil((kTemp * (9 / 5)) - 459.67);
	document.getElementById("weather").innerHTML = `
	<div class="d-flex align-items-start">
		<h2 style="text-shadow: 0px 0px 3px whitesmoke;"><strong>${fTemp}°</strong></h2>
	</div>
	`

}


export default class WeatherController {
	constructor() {
		//this will fire off get weather right away
		Store.addSubscriber('weather', draw)

	}
	getWeather() {
		Store.getWeather()
	}
}
