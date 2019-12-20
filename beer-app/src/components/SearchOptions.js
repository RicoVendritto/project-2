import React from "react";
import { Link } from "react-router-dom";

const SearchOptions = props => {
  return (
    <div className="searchContainer">
      <Link to="/search/bbn" onClick={e => props.reset()}>
        <div className="searchOptions option1">
          <h2>Beer by Name</h2>
        </div>
      </Link>
      <Link to="/search/abv" onClick={e => props.reset()}>
        <div className="searchOptions option2">
          <h2>Alcohol by Volume</h2>
        </div>
      </Link>
      <Link to="/search/ibv" onClick={e => props.reset()}>
        <div className="searchOptions option3">
          <h2>International Bitterness Volume</h2>
        </div>
      </Link>
      <Link to="/search/ebc" onClick={e => props.reset()}>
        <div className="searchOptions option4">
          <h2>European Beer Convention Colour</h2>
        </div>
      </Link>
      <Link to="/search/rbg" onClick={e => props.reset()}>
        <div className="searchOptions option5">
          <h2>Random Beer Generator</h2>
        </div>
      </Link>
      <Link to="/search/baf" onClick={e => props.reset()}>
        <div className="searchOptions option6">
          <h2>Beer and Food</h2>
        </div>
      </Link>
      <Link to="/search/brn" onClick={e => props.reset()}>
        <div className="searchOptions option7">
          <h2>Brewery by Name</h2>
        </div>
      </Link>
      <Link to="/search/brc" onClick={e => props.reset()}>
        <div className="searchOptions option8">
          <h2>Brewery by City</h2>
        </div>
      </Link>
    </div>
  );
};

export default SearchOptions;
