import React from "react";

//Custom component
import Results from "./Results";

const Search = props => {
  const slug = props.props.match.params.slug;
  return (
    <div className="search">
      <form onSubmit={e => props.handleSubmit(e, slug)}>
        <h2>SEARCH</h2>
        {slug !== "rbg" ? (
          <input
            type="text"
            name="search"
            onChange={props.handleChange}
            placeholder="type here"
          />
        ) : (
          <button name="generate">GENERATE</button>
        )}
      </form>
      {props.apiDataLoaded && <Results results={props.results} slug={slug} />}
    </div>
  );
};

export default Search;
