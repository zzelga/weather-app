const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=grindhouse%20coffee%20philadelphia',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, null, 2));
});
