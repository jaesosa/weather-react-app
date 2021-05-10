import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
  setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    wind: Math.round(response.data.wind.speed),
    humidity: response.data.main.humidity,
    icon: response.data.weather[0].icon
  });
  }

function search() {
const apiKey = "a6dd1b72720a6b8569eb4aedde277ef9";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCity(event) {
 setCity(event.target.value);
}

  if (weatherData.ready) {
return (
  <div className="Weather">
  <form className="Search" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            className="form-control"
            id="search-text-input"
            placeholder="Enter your city. . ."
            autoFocus="on"
            onChange={handleCity}
          />
        </div>
        <div className="col-3">
          <button type="submit" class="btn btn-secondary w-100" value="Search">
            Search
          </button>
        </div>
      </div>
    </form>
      <div className="row">
        <div className="col-6">
          <h1 className="city">{weatherData.city}</h1>
          <h2>
            <FormattedDate date={weatherData.date} />
            </h2>
          <ul>
            <li>
              <span id="description">{weatherData.description}</span>
            </li>
            <li>
              Wind Speed: <span id="wind">{weatherData.wind} </span> mph
            </li>
            <li>
              Humidity: <span id="humidity">{weatherData.humidity} </span>%
            </li>
          </ul>
        </div>
        <div className="col-2 mt-5">
          <WeatherIcon code={weatherData.icon} />
        </div>
        <div className="col-4 mt-5">
          <div className="temperature-today">
            <h3>
              <span id="temperature"></span>{weatherData.temperature} <span id="unit">°F | °C</span>
            </h3>
          </div>
        </div>
      </div>
      <footer>
        <hr />
        <div className="weather-forecast" id="forecast"></div>
      </footer>
    </div>
  );
  } else {
search();
  return "Loading. . ."
    }
  }