import React, { Component } from "react";
import { Route } from "react-router-dom";

//Custom components
import SearchOptions from "./SearchOptions";
import Search from "./Search";
import Home from "./Home";
import Results from "./Results";

//Api component
import {
  beerApi,
  breweryApi,
  beerName,
  abvApi,
  ibuApi,
  ebcApi,
  randomBeer,
  foodBeerApi,
  breweryCity,
  breweryName
} from "../services/ApiCalls";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: '',
      apiDataLoaded: false
    };
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

  handleSubmit = async (e, search) => {
    e.preventDefault();
    console.log("HELLO WORLD");
    console.log(search);
    switch (search) {
      case "bbn":
        console.log("BBN");
        break;
      case "abv":
        console.log("ABV");
        break;
      case "ibv":
        console.log("IBV");
        break;
      case "ebc":
        console.log("EBC");
        break;
      case "rbg":
        console.log("RBG");
        const results = await randomBeer();
        this.setState({
          results,
          apiDataLoaded: true
        })
        break;
      case "baf":
        console.log("BAF");
        break;
      case "brn":
        console.log("BRN");
        break;
      case "brg":
        console.log("BRG");
        break;
      default:
        console.log("Damn that went wrong man!");
    }
  };

  render() {
    return (
      <main>
        <Route exact path="/home" render={() => <Home />} />
        <Route path="/searchOptions" render={() => <SearchOptions />} />
        <Route
          path="/search/:slug"
          render={props => (
            <Search props={props} handleSubmit={this.handleSubmit} />
          )}
        />
        {this.state.apiDataLoaded && <Results results={this.state.results} />}
      </main>
    );
  }
}

export default Main;
