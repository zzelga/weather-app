require('dotenv').config();
const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${process.env.FORECAST_IO_API_KEY}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(null, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports = { getWeather };
