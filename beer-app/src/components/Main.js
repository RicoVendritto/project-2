import React, { Component } from "react";

//Custom components
import Location from "./Location";

//Api component
import { beerApi, breweryApi } from "../services/ApiCalls";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const result1 = await beerApi();
    const result2 = await breweryApi();
    console.log(result1);
    console.log(result2);
  };

  render() {
    return (
      <main>
        <Location />
      </main>
    );
  }
}

export default Main;
