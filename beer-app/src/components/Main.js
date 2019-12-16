import React, { Component } from "react";

//Custom components
import SearchOptions from "./SearchOptions";

//Api component
import { beerApi, breweryApi, beerName, abvApi, ibuApi } from "../services/ApiCalls";

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
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
    console.log(result5);
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
