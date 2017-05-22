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
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (error, weatherResults) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`It's currently ${weatherResults.temperature}.\nIt feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});
