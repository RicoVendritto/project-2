import React from "react";

const Weather = props => {
  return (
    <div>
      {props.apiDataLoaded && (
        <div className="weatherFooter">
          <div className="weatherInfo">
            <img src={props.icon} alt="weatherIcon" />
            <p className="temperatures">{props.weatherInfo.data.main.temp.toFixed(0)} &#8451;<span> // </span>
            {((props.weatherInfo.data.main.temp * 9 / 5) + 32).toFixed(0)} &#8457;</p>
          </div>
          <div className="weatherRec">
            {props.weatherInfo.data.main.temp > 20 ? (
              <p>Yeah! Awesome weather to drink beer</p>
            ) : (
              <p>Okay, not that great, but whatever, just have a <span>beer!</span></p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
