import React, { Component } from "react";

//Custom components
import SearchOptions from "./SearchOptions";

//Api component
import { beerApi, breweryApi, beerName, abvApi, ibuApi, ebcApi, randomBeer, foodBeerApi, breweryCity, breweryName } from "../services/ApiCalls";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const result1 = await beerApi();
    const result2 = await breweryApi();
    const result3 = await beerName("bud");
    const result4 = await abvApi(2);
    const result5 = await ibuApi(2);
    const result6 = await ebcApi(500);
    const result7 = await randomBeer();
    const result8 = await foodBeerApi("pork");
    const result9 = await breweryCity("new_york");
    const result0 = await breweryName("empire");
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
    console.log(result5);
    console.log(result6);
    console.log(result7);
    console.log(result8);
    console.log(result9);
    console.log(result0);
  };

  render() {
    return (
      <main>
        <SearchOptions />
      </main>
    );
  }
}

export default Main;
