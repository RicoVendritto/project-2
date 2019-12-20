import React from "react";

//Custom component
import Results from "./Results";

const Search = props => {
  const slug = props.props.match.params.slug;
  let output = null;
  switch (slug) {
    case "rbg":
      output = <button name="generate">GENERATE</button>;
      break;
    case "abv":
      output = (
        <div>
          <span className="beerInfo">
            Alcohol by volume is a standard measure of how much alcohol
            (ethanol) is contained in a given volume of an alcoholic beverage
            (expressed as a volume percent
          </span>
          <select className="levelValue">
            <option value="1">1%</option>
            <option value="5">5%</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="25">25%</option>
            <option value="35">35%</option>
          </select>
          <select className="valueHighLow">
            <option value="lt">LT</option>
            <option value="gt">GT</option>
          </select>
          <input type="submit" value="Search" />
        </div>
      );
      break;
    case "ibv":
      output = (
        <div>
          <span className="beerInfo">
            IBU is an abbreviation for the International Bitterness Units scale,
            a gauge of beer's bitterness. What IBUs measure are the parts per
            million of isohumulone found in a beer. Isohumulone is the acid
            found in hops that gives beer its bitter bite.
            <img src="https://www.julesbartow.com/Electrician/Industrial/Brewery/InternationalBitternessUnits_%28IBU%29_Guide.png" />
          </span>
          <select className="levelValue">
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="250">250</option>
            <option value="500">500</option>
            <option value="750">750</option>
          </select>
          <select className="valueHighLow">
            <option value="lt">LT</option>
            <option value="gt">GT</option>
          </select>
          <input type="submit" value="Search" />
        </div>
      );
      break;
    case "ebc":
      output = (
        <div>
          <span className="beerInfo">
          The colour of beer is measured in EBCs. EBC stands for European Brewery Convention.
            <img src="https://i.pinimg.com/originals/59/60/7e/59607ee85d8857f40de3abc84d3564e4.png" />
          </span>
          <select className="levelValue">
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
          </select>
          <select className="valueHighLow">
            <option value="lt">LT</option>
            <option value="gt">GT</option>
          </select>
          <input type="submit" value="Search" />
        </div>
      );
      break;
    case "bbn":
    case "baf":
    case "brn":
    case "brc":
      output = (
        <input
          className="inputField"
          type="text"
          name="search"
          onChange={props.handleChange}
          placeholder="type here"
        />
      );
      break;
    default:
      console.log("Error error error");
  }
  return (
    <div className="search">
      <form onSubmit={e => props.handleSubmit(e, slug)}>
        <h2>SEARCH</h2>
        <div className="output">{output}</div>
      </form>
      {props.apiDataLoaded && (
        <Results
          favoriteSubmit={props.favoriteSubmit}
          results={props.results}
          slug={slug}
        />
      )}
    </div>
  );
};

export default Search;
