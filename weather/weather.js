// API KEY: 9e753b3c8a3888c6bb031e016812a6ff

const request = require('request');

var getWeather = () => {
  request({
  	url: 'google.com',
  	json: true
  }, (error, response, body) => {
  	if (!error && response.statusCode == 200) {
  		console.log(body.currently.temperature);
  	} else {
  		console.log('Unable to fetch weather');
  	}
  });
};

module.exports.getWeather = getWeather;
