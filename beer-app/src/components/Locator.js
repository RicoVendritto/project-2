import React, { Component, Suspense } from "react";
import { locationGet } from "../services/ApiCalls";
import Weather from "./Weather";

class Locator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiDataLoaded: false,
      weatherInfo: null,
      iconURL: null
    };
  }

  componentDidMount = () => {
    let results = null;
    let icon = null;
    let iconInfo = null;

    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      let crd = pos.coords;
      let lat = crd.latitude;
      let lon = crd.longitude;
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      getWeatherInfo(lat, lon);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    async function getWeatherInfo(lat, lon) {
      results = await locationGet(lat, lon);
      icon = results.data.weather[0].icon;
      iconInfo = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    }

    setTimeout(() => {
      this.setState({
        apiDataLoaded: true,
        weatherInfo: results,
        iconURL: iconInfo
      });
    }, 5000);
  };

  render() {
    console.log(this.state.weatherInfo);
    return (
      <div>
        <Suspense fallback={<h1>Loading weather...</h1>}>
          <Weather
            icon={this.state.iconURL}
            weatherInfo={this.state.weatherInfo}
            apiDataLoaded={this.state.apiDataLoaded}
          />
        </Suspense>
      </div>
    );
  }
}

export default Locator;
