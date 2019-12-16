import React from "react";

const Results = props => {
  const results = props.results.data;
  return results.map((result, index) => (
    <div key={index}>
      <h2>{result.name}</h2>
      <h4>{result.tagline}</h4>
      <p>{result.description}</p>
      <img src={result.image_url} alt="Beer Image" />
    </div>
  ));
}

export default Results;
