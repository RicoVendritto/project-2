import React from "react";
import { Link } from "react-router-dom";

const SearchOptions = () => {
  return (
    <div className="searchContainer">
      <div className="searchOptions">
        <h2>Beer by Name</h2>
        <Link to="/search/bbn">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>Alcohol by Volume</h2>
        <Link to="/search/abv">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>International Bitterness Volume</h2>
        <Link to="/search/ibv">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>European Beer Convention Colour</h2>
        <Link to="/search/ebc">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>Random Beer Generator</h2>
        <Link to="/search/rbg">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>Beer and Food</h2>
        <Link to="/search/baf">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>Brewery by Name</h2>
        <Link to="/search/brn">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>Brewery by City</h2>
        <Link to="/search/brc">SEARCH</Link>
      </div>
    </div>
  );
};

export default SearchOptions;
