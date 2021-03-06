import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//Custom components
import SearchOptions from "./SearchOptions";
import Search from "./Search";
import Home from "./Home";
import Favourites from "./Favourites";
import Fallback from "./Fallback";

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
      weatherInfoLoaded: false,
      favouriteArray: [],
      favourite: false
    };
  }

  handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    value = value.split(" ").join("_");
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (e, key) => {
    e.preventDefault();
    const search = this.state.search;
    let results = null;
    let option = null;
    let gtlt = null;
    switch (key) {
      case "bbn":
        results = await beerName(search);
        this.submit(results, key);
        break;
      case "abv":
        option = document.querySelector(".levelValue");
        gtlt = document.querySelector(".valueHighLow");
        option = option.options[option.selectedIndex].value;
        gtlt = gtlt.options[gtlt.selectedIndex].value;
        results = await abvApi(option, gtlt);
        this.submit(results, key);
        break;
      case "ibv":
        option = document.querySelector(".levelValue");
        gtlt = document.querySelector(".valueHighLow");
        option = option.options[option.selectedIndex].value;
        gtlt = gtlt.options[gtlt.selectedIndex].value;
        results = await ibuApi(option, gtlt);
        this.submit(results, key);
        break;
      case "ebc":
        option = document.querySelector(".levelValue");
        gtlt = document.querySelector(".valueHighLow");
        option = option.options[option.selectedIndex].value;
        gtlt = gtlt.options[gtlt.selectedIndex].value;
        results = await ebcApi(option, gtlt);
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

  reset = () => {
    this.setState({
      results: "",
      key: "",
      apiDataLoaded: false
    });
  };

  favoriteSubmit = (e, result) => {
    e.preventDefault();
    let favouriteArray = this.state.favouriteArray;
    let test = true;
    if (favouriteArray.length > 0) {
      for (let i = 0; i < favouriteArray.length; i++) {
        if (favouriteArray[i].id === result.id) {
          test = false;
          break;
        }
      }
    }
    if (test) {
      result["favourite"] = true;
      favouriteArray.push(result);
    }
    this.setState({
      favouriteArray,
      favourite: true
    });
  };

  favoriteDelete = (e, result) => {
    e.preventDefault();
    const currentArray = this.state.favouriteArray.filter(
      fav => fav.id !== result.id
    );
    this.setState({
      favouriteArray: currentArray
    });
  };

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/home" render={() => <Home />} />
          <Route
            path="/searchOptions"
            render={() => <SearchOptions reset={this.reset} />}
          />
          <Route
            path="/search/:slug"
            render={props => (
              <Search
                props={props}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                results={this.state.results}
                apiDataLoaded={this.state.apiDataLoaded}
                favoriteSubmit={this.favoriteSubmit}
              />
            )}
          />
          <Route
            path="/favourites"
            render={() => (
              <Favourites
                favouriteArray={this.state.favouriteArray}
                favourite={this.state.favourite}
                favoriteSubmit={this.favoriteDelete}
              />
            )}
          />
          <Route path="/" render={() => <Fallback />} />
        </Switch>
      </main>
    );
  }
}

export default Main;
