import React, { useState } from "react";

export default function WeatherUnit(props) {
    const [unit, setUnit] = useState("fahrenheit");

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit === "fahrenheit") {
    return(
        <div className="tempToday">
            <h3>
              <span id="temperature">{Math.round(props.fahrenheit)}</span> 
              <span id="unit">°F | <a href="/" onClick={showCelsius}>°C</a></span>
            </h3>
          </div>
    )
} else {
    let celsius = (props.fahrenheit * 5/9) - 32;
    return (
         <div className="tempToday">
            <h3>
              <span id="temperature">{Math.round(celsius)}</span> 
              <span id="unit"><a href="/" onClick={showFahrenheit}>°F</a> | °C </span>
            </h3>
          </div>
    )
}
}