import React from "react";

const Weather = props => {
  return (
    <div>
      {props.apiDataLoaded && (
        <div className="weatherFooter">
          <div className="weatherInfo">
            <img src={props.icon} alt="weatherIcon" />
            <p>{props.weatherInfo.data.main.temp} &#8451;</p>
          </div>
          <div className="weatherRec">
            {props.weatherInfo.data.main.temp > 20 ? (
              <p>Yeah! Awesome weather to drink beer</p>
            ) : (
              <p>Okay, not that great, but sure, just have a beer!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
