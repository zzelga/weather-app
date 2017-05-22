const request = require('request');

var getWeather = () => {
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
};

module.exports = { getWeather };
