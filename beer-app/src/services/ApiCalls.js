import axios from "axios";

const apiUrl = "https://api.punkapi.com/v2/beers";
const beerSearch = "?beer_name=";
const abvSearch = "?abv_";
const ibuSearch = "?ibu_";
const ebcSearch = "?ebc_";
const foodSearch = "?food=";
const randomSearch = "https://api.punkapi.com/v2/beers/random";
const apiBrewery = "https://api.openbrewerydb.org/breweries";
const nameBrewery = "?by_name=";
const cityBrewery = "?by_city=";

export async function beerApi(props) {
  const results = await axios(apiUrl);
  return results;
}

export async function beerName(beer_name) {
  const results = await axios(`${apiUrl}${beerSearch}${beer_name}`);
  return results;
}

export async function abvApi(value, scale) {
  console.log(`${apiUrl}${abvSearch}${scale}=${value}`);
  const results = await axios(`${apiUrl}${abvSearch}${scale}=${value}`);
  return results;
}

export async function ibuApi(value, scale) {
  const results = await axios(`${apiUrl}${ibuSearch}${scale}=${value}`);
  return results;
}

export async function ebcApi(value, scale) {
  const results = await axios(`${apiUrl}${ebcSearch}${scale}=${value}`);
  return results;
}

export async function randomBeer(props) {
  const results = await axios(randomSearch);
  return results;
}

export async function foodBeerApi(food) {
  const results = await axios(`${apiUrl}${foodSearch}${food}`);
  return results;
}

export async function breweryApi(props) {
  const results = await axios(apiBrewery);
  return results;
}

export async function breweryName(name) {
  const results = await axios(`${apiBrewery}${nameBrewery}${name}`);
  return results;
}

export async function breweryCity(city) {
  const results = await axios(`${apiBrewery}${cityBrewery}${city}`);
  return results;
}

export async function locationGet(lat, lon) {
  const results = await axios(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=6a1a2778397877dac586c1ec24df6a18`);
  return results;
}
