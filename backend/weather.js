const axios = require("axios");

const getWeather = (key, city, res) => {
  console.log(key, city);
  axios
    .get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = getWeather;
