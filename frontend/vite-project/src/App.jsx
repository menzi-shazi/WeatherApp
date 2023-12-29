// src/App.js
import React from "react";
import WeatherApp from "./WeatherApp";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Weather App";
  }, []);
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;
