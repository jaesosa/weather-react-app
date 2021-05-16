import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
function maxTemp() {
let temperature = Math.round(props.data.temp.max);
return `${temperature}°`;
}

function minTemp() {
let temperature = Math.round(props.data.temp.min);
return `${temperature}°`;
}

function day() {
let date = new Date(props.data.dt * 1000);
let day = date.getDay();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

return days[day];
}

    return (
        <div className="oneDay">
               <span className="day">{day()}</span>      
    <div className="icon"><WeatherIcon code={props.data.weather[0].icon} size={40} /></div>
  <span className="max-temp">{maxTemp()}</span> |
  <span className="min-temp">{minTemp()}</span>
            </div>
    )
}