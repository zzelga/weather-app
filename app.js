const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

const latitude = 28.385233;
const longitude = -81.563874;

weather.getWeather(latitude, longitude, (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`The temperature is currently ${results.temperature}, but feels like ${results.apparentTemperature}.`);
  }
});
