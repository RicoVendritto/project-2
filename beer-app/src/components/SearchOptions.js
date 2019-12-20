import React from "react";
import { Link } from "react-router-dom";

const SearchOptions = props => {
  return (
    <div className="searchContainer">
      <div className="searchOptions option1">
        <Link to="/search/bbn" onClick={e => props.reset()}>
          <h2>Beer by Name</h2>
        </Link>
      </div>
      <div className="searchOptions option2">
        <Link to="/search/abv" onClick={e => props.reset()}>
          <h2>Alcohol by Volume</h2>
        </Link>
      </div>
      <div className="searchOptions option3">
        <Link to="/search/ibv" onClick={e => props.reset()}>
          <h2>International Bitterness Volume</h2>
        </Link>
      </div>
      <div className="searchOptions option4">
        <Link to="/search/ebc" onClick={e => props.reset()}>
          <h2>European Beer Convention Colour</h2>
        </Link>
      </div>
      <div className="searchOptions option5">
        <Link to="/search/rbg" onClick={e => props.reset()}>
          <h2>Random Beer Generator</h2>
        </Link>
      </div>
      <div className="searchOptions option6">
        <Link to="/search/baf" onClick={e => props.reset()}>
          <h2>Beer and Food</h2>
        </Link>
      </div>
      <div className="searchOptions option7">
        <Link to="/search/brn" onClick={e => props.reset()}>
          <h2>Brewery by Name</h2>
        </Link>
      </div>
      <div className="searchOptions option8">
        <Link to="/search/brc" onClick={e => props.reset()}>
          <h2>Brewery by City</h2>
        </Link>
      </div>
    </div>
  );
};

export default SearchOptions;
