const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(results, null, 2));
  }
});

const forecast_io_api_key = '87e8139acc3901b3e9d40669941841e1';
const latitude = 28.385233;
const longitude = -81.563874;

request({
  url: `https://api.darksky.net/forecast/${forecast_io_api_key}/${latitude},${longitude}`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather.');
  }
});
