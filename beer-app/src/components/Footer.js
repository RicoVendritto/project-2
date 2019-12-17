import React, { Component } from "react";

//Custom components
import Location from "./Location";
import Locator from "./Test";
import Weather from "./Weather";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: "",
      weatherInfoLoaded: false
    };
  }

  render() {
    return (
      <footer>
        <div>FOOTER</div>
        <Locator />
        {/* {this.state.weatherInfoLoaded && <Weather weatherInfo={this.state.weatherInfo} />} */}
      </footer>
    );
  }
}

export default Footer;
