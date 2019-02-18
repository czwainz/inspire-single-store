const weatherUrl = '//bcw-getter.herokuapp.com/?url=';
const weatherUrl2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
const weatherApiUrl = weatherUrl + encodeURIComponent(weatherUrl2);

const weatherApi = axios.create({
	baseURL: weatherApiUrl,
	timeout: 3000
});

export default class WeatherService {

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
