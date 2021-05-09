import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  
  function handleResponse(response) {
  setTemperature(Math.round(response.data.main.temp));
  setReady(true);
  }

  if (ready) {
return (
  <div className="Weather">
  <form className="Search">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            className="form-control"
            id="search-text-input"
            placeholder="Enter your city. . ."
            autoFocus="on"
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
          <h1 className="city">New York</h1>
          <h2>Tuesday 4 May 18:51</h2>
          <ul>
            <li>
              <span id="description">Partly Cloudy</span>
            </li>
            <li>
              Wind Speed: <span id="wind">2 </span> mph
            </li>
            <li>
              Precipitation: <span id="precipitation">4 </span>%
            </li>
          </ul>
        </div>
        <div className="col-2 mt-5">
          <ReactAnimatedWeather
    icon="PARTLY_CLOUDY_NIGHT"
    color="#CC5C82"
    size= {100}
    animate="true"
  />
        </div>
        <div className="col-4 mt-5">
          <div className="temperature-today">
            <h3>
              <span id="temperature"></span>63 <span id="unit">°F</span>
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
  const apiKey = "a6dd1b72720a6b8569eb4aedde277ef9";
  const city = "New York"
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading. . ."
    }
  }