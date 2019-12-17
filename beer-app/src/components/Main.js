import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//Custom components
import SearchOptions from "./SearchOptions";
import Search from "./Search";
import Home from "./Home";

//Api component
import {
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
      search: "",
      results: "",
      apiDataLoaded: false,
      key: "",
      weatherInfo: "",
      weatherInfoLoaded: false
    };
  }

  handleChange = e => {
    console.log(e);
    const name = e.target.name;
    let value = e.target.value;
    value = value.split(" ").join("_");
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (e, key) => {
    e.preventDefault();
    console.log(key);
    const search = this.state.search;
    let results = null;
    switch (key) {
      case "bbn":
        results = await beerName(search);
        this.submit(results, key);
        break;
      case "abv":
        results = await abvApi(search);
        this.submit(results, key);
        break;
      case "ibv":
        results = await ibuApi(search);
        this.submit(results, key);
        break;
      case "ebc":
        results = await ebcApi(search);
        this.submit(results, key);
        break;
      case "rbg":
        results = await randomBeer();
        this.submit(results, key);
        break;
      case "baf":
        results = await foodBeerApi(search);
        this.submit(results, key);
        break;
      case "brn":
        results = await breweryName(search);
        this.submit(results, key);
        break;
      case "brc":
        results = await breweryCity(search);
        this.submit(results, key);
        break;
      default:
        console.log("Damn that went wrong man!");
    }
  };

  submit = (results, key) => {
    this.setState({
      results,
      key,
      apiDataLoaded: true
    });
  };

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/home" render={() => <Home />} />
          <Route path="/searchOptions" render={() => <SearchOptions />} />
          <Route
            path="/search/:slug"
            render={props => (
              <Search
                props={props}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                results={this.state.results}
                apiDataLoaded={this.state.apiDataLoaded}
              />
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
