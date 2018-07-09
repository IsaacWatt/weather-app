const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})

	.help()
	.alias('help', 'h')
	.argv;

	var encodedAddress = encodeURIComponent(argv.address);
	var geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

	axios.get(geoUrl).then((response) => {

		if (response.data.status === 'ZERO_RESULTS') {
			throw new Error('Unable to find that address');
		}

		var lat = response.data.results[0].geometry.location.lat;
		var lng = response.data.results[0].geometry.location.lng;
		var weatherUrl = `https://api.darksky.net/forecast/9e753b3c8a3888c6bb031e016812a6ff/${lat},${lng}`
		console.log(response.data.results[0].formatted_address);
		return axios.get(weatherUrl);

	}).then((response) => {
		var temperature = response.data.currently.temperature;
		var apparent = response.data.currently.apparentTemperature;
		console.log(`It is currently ${temperature}. It feels like ${apparent}`);
	}).catch((e) => {
		if (e.code === 'ENOTFOUND') {
			console.log('Unable to connect to API servers');
		} else {
			console.log(e.message);
		}
	});
