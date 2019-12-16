import React, { Component } from "react";
import { Route } from "react-router-dom";

//Custom components
import SearchOptions from "./SearchOptions";
import Search from "./Search";
import Home from "./Home";
import Results from "./Results";

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
      apiDataLoaded: false
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  };

  handleSubmit = async (e, key) => {
    e.preventDefault();
    console.log(key);
    const search = this.state.search;
    let results = null;
    switch (key) {
      case "bbn":
        results = await beerName(search);
        this.submit(results);
        break;
      case "abv":
        results = await abvApi(search);
        this.submit(results);
        break;
      case "ibv":
        results = await ibuApi(search);
        this.submit(results);
        break;
      case "ebc":
        results = await ebcApi(search);
        this.submit(results);
        break;
      case "rbg":
        results = await randomBeer();
        this.submit(results);
        break;
      case "baf":
        results = await foodBeerApi(search);
        this.submit(results);
        break;
      case "brn":
        results = await breweryCity(search);
        this.submit(results);
        break;
      case "brc":
        results = await breweryName(search);
        this.submit(results);
        break;
      default:
        console.log("Damn that went wrong man!");
    }
  };

  submit = (results) => {
    this.setState({
      results,
      apiDataLoaded: true
    })
  }

  render() {
    return (
      <main>
        <Route exact path="/home" render={() => <Home />} />
        <Route path="/searchOptions" render={() => <SearchOptions />} />
        <Route
          path="/search/:slug"
          render={props => (
            <Search
              props={props}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          )}
        />
        {this.state.apiDataLoaded && <Results results={this.state.results} />}
      </main>
    );
  }
}

export default Main;
