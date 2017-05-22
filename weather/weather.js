const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  const forecast_io_api_key = '87e8139acc3901b3e9d40669941841e1';

  request({
    url: `https://api.darksky.net/forecast/${forecast_io_api_key}/${latitude},${longitude}`,
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
