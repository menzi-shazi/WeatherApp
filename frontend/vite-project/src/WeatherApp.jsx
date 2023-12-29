import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.post("/weather", {
        city,
      });

      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Error fetching weather data. Please try again.");
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={handleSearch}
          style={{ backgroundColor: "#29b6f6", color: "black" }}
        >
          Search
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.location.name}</h2>
          <p>{weatherData.current.condition.text}</p>
          <img
            src={`http:${weatherData.current.condition.icon}`}
            alt="Weather Icon"
          />
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Wind: {weatherData.current.wind_kph} km/h</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
