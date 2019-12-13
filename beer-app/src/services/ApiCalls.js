import axios from 'axios';

const apiUrl = "https://api.punkapi.com/v2/beers";
const apiBrewery = "https://api.openbrewerydb.org/breweries";

export async function beerApi(props) {
  const results = await axios(apiUrl);
  return results;
}

export async function breweryApi(props) {
  const results = await axios(apiBrewery);
  return results;
}