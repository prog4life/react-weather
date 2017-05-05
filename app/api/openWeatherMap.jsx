var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=29795b713b38323b08aa87fa25182f04';

// appid:
// 29795b713b38323b08aa87fa25182f04
// q=City

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
    .then(function (res) {
      // debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      // there is a mistake with return values handling in course original code
      // "res.data" is undefined, so "res.response.data" is used instead:
      throw new Error(res.response.data.message);
    });
  }
};
