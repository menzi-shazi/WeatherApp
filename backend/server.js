const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));

const getWeather = require("./weather");
const key = process.argv[2];

app.post("/weather", (req, res) => {
  const city = req.body.city;
  const weather = getWeather(key, city, res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
