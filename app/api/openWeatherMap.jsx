var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=7b3cd79972cc7160808a284b0192e5e7&units=imperial";

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		//template strings `${}` everything is executed like JS
	
		return axios.get(requestUrl).then(function(res) {
			//debugger;
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	}
}