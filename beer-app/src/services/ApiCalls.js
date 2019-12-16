import axios from 'axios';
import { geolocated } from "react-geolocated";

const apiUrl = "https://api.punkapi.com/v2/beers";
const beerSearch = "?beer_name=";
const abvSearch = "?abv_gt=";
const ibuSearch = "?ibu_gt";
const randomUrl = "https://api.punkapi.com/v2/beers/random";
const apiBrewery = "https://api.openbrewerydb.org/breweries";

export async function beerApi(props) {
  const results = await axios(apiUrl);
  return results;
}

export async function beerName(beer_name) {
  const results = await axios(`${apiUrl}${beerSearch}${beer_name}`);
  return results;
}

export async function abvApi(value, scale) {
  const results = await axios(`${apiUrl}${abvSearch}${value}`);
  return results;
}

export async function ibuApi(value, scale) {
  const results = await axios(`${apiUrl}${ibuSearch}${value}`);
  return results;
}

export async function randomBeer(props) {
  const results = await axios(randomUrl);
  return results;
}

export async function breweryApi(props) {
  const results = await axios(apiBrewery);
  return results;
}
