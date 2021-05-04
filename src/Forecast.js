import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
    return (
        <div className="Week">
        <div className="row">
            <div className="col-3">
                Tue
                <br />         
    <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="#CC5C82"
    size= {70}
    animate="true"
  />
  <br />
  <div className="temperature">
  <strong>72°</strong> | 51°
  </div>
            </div>
            <div className="col-3">
                Wed
                <br />         
     <ReactAnimatedWeather
    icon="RAIN"
    color="#CC5C82"
    size= {70}
    animate="true"
  />
   <br />
  <div className="temperature">
  <strong>68°</strong> | 49°
  </div>
            </div>
            <div className="col-3">
                Thu
                <br />         
   <ReactAnimatedWeather
    icon="WIND"
    color="#CC5C82"
    size= {70}
    animate="true"
  />
   <br />
  <div className="temperature">
  <strong>65°</strong> | 40°
  </div>
            </div>
            <div className="col-3">
                Fri
                <br />                
  <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="#CC5C82"
    size= {70}
    animate="true"
  />
   <br />
  <div className="temperature">
  <strong>80°</strong> | 51°
  </div>
       </div>
        </div>
        </div>
    )
}