import React from "react";
import { Link } from "react-router-dom";

const SearchOptions = () => {
  return (
    <div className="searchContainer">
      <div className="searchOptions">
        <Link to="/search/bbn">
          <h2>Beer by Name</h2>
        </Link>
      </div>
      <div className="searchOptions">
        <Link to="/search/abv">
          <h2>Alcohol by Volume</h2>
        </Link>
      </div>
      <div className="searchOptions">
        <Link to="/search/ibv">
          <h2>International Bitterness Volume</h2>
        </Link>
      </div>
      <div className="searchOptions">
        <Link to="/search/ebc">
          <h2>European Beer Convention Colour</h2>
        </Link>
      </div>
      <div className="searchOptions">
        <Link to="/search/rbg">
          <h2>Random Beer Generator</h2>
        </Link>
      </div>
      <div className="searchOptions">
        <Link to="/search/baf">
          <h2>Beer and Food</h2>
        </Link>
      </div>
      <div className="searchOptions">
        <Link to="/search/brn">
          <h2>Brewery by Name</h2>
        </Link>
      </div>
      <div className="searchOptions">
        <Link to="/search/brc">
          <h2>Brewery by City</h2>
        </Link>
      </div>
    </div>
  );
};

export default SearchOptions;
