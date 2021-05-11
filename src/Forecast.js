import axios from "axios";
import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

useEffect(() => {
  setLoaded(false);
}, [props.coordinates]);

function handleResponse(response) {
 setForecast(response.data.daily);
 setLoaded(true);
}

if (loaded) {
  return (
        <div className="Week">
        <div className="row">
          {forecast.map(function(dailyForecast, index) {
            if (index < 5) {
            return (
               <div className="col" key={index}>
          <ForecastDay data={dailyForecast} />
          </div>
            );
} else {
  return null;
}
})}
    </div>
      </div>
    )
} else {
  const apiKey = "a6dd1b72720a6b8569eb4aedde277ef9";
  const latitude = props.coordinates.lat;
  const longitude = props.coordinates.lon;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
   
  axios.get(apiUrl).then(handleResponse);

  return(null);
}
  
  
}