import React from "react";

const Search = props => {
  console.log(props.props.match.params.slug);
  const slug = props.props.match.params.slug;
  return (
    <form onSubmit={(e) => props.handleSubmit(e, slug)}>
      <h2>SEARCH</h2>
      {slug !== "rbg" ? <input type="text" name="search" placeholder="type here" /> : <button name="generate">GENERATE</button>}
    </form>
  );
};

export default Search;
