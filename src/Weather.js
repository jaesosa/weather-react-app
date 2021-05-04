import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1 className="city">New York</h1>
          <h2>Monday 28 April 18:51</h2>
          <ul>
            <li>
              <span id="description">Light Rain</span>
            </li>
            <li>
              Wind Speed: <span id="wind">2 </span> mph
            </li>
          </ul>
        </div>

        <div className="col-2 mt-5">
          <img src="/images/weather.png" alt="" id="weather-icon" />
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
}
