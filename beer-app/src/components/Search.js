import React from "react";

const Search = props => {
  console.log(props.props.match.params.slug);
  const slug = props.props.match.params.slug;
  return (
    <form onSubmit={(e) => props.handleSubmit(e, slug)}>
      <h2>SEARCH</h2>
      <input type="text" name="search" placeholder="type here" />
    </form>
  );
};

export default Search;
