import axios from "axios";
import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
function handleResponse(response) {
  console.log(response.data);
}

  const apiKey = "a6dd1b72720a6b8569eb4aedde277ef9";
  const latitude = props.coordinates.lat;
  const longitude = props.coordinates.lon;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
   
  axios.get(apiUrl).then(handleResponse);
  return (
        <div className="Week">
        <div className="row">
            <div className="col">
               <span className="day"> Tue</span>      
    <div className="icon"><WeatherIcon code="01d" size={40} /></div>
  <span className="max-temp">72°</span>
  <span className="min-temp">51°</span>
            </div>
    </div>
      </div>
    )
}