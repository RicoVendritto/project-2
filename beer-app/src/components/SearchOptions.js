import React from "react";
import { Link } from "react-router-dom";

{
  /* <Link to={"Profile/"+hero.hero_id} slug={hero.id}>Profile Info</Link> */
}

const SearchOptions = () => {
  return (
    <div className="searchContainer">
      <div className="searchOptions">
        <h2>Beer by Name</h2>
        <Link to="/search/bbn">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>Alcohol by Volume</h2>
        <Link to="/search">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>International Bitterness Volume</h2>
        <Link to="/search">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>European Beer Convention Colour</h2>
        <Link to="/search">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>Random Beer Generator</h2>
        <Link to="/search">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>Beer and Food</h2>
        <Link to="/search">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>Brewery by Name</h2>
        <Link to="/search">SEARCH</Link>
      </div>
      <div className="searchOptions">
        <h2>Brewery by City</h2>
        <Link to="/search">SEARCH</Link>
      </div>
    </div>
  );
};

export default SearchOptions;
