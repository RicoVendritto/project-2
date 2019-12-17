import React, { Component, Suspense } from "react";

//Custom components
import Locator from "./Locator";

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
        <Suspense fallback={<h1>Loading weather...</h1>}>
          <Locator />
        </Suspense>
      </footer>
    );
  }
}

export default Footer;
