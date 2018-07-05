// API KEY: 9e753b3c8a3888c6bb031e016812a6ff

const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
  	url: `https://api.darksky.net/forecast/9e753b3c8a3888c6bb031e016812a6ff/${lat},${lng}`,
  	json: true
  }, (error, response, body) => {
  	if (!error && response.statusCode == 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemp: body.currently.apparentTemperature
      });
  	} else {
  		console.log('Unable to fetch weather');
  	}
  });
};

module.exports.getWeather = getWeather;
