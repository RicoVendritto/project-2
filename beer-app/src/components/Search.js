import React from "react";

//Custom component
import Results from "./Results";

const Search = props => {
  const slug = props.props.match.params.slug;
  console.log(slug);
  let output = null;
  switch (slug) {
    case "rbg":
      output = <button name="generate">GENERATE</button>;
      break;
    case "abv":
      output = (
        <div>
          <select className="levelValue">
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="35">35</option>
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
        <div>{output}</div>
      </form>
      {props.apiDataLoaded && <Results results={props.results} slug={slug} />}
    </div>
  );
};

export default Search;
