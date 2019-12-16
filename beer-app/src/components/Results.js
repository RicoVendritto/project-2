import React from "react";

const Results = props => {
  console.log(props.results.data);
  const results = props.results.data;
  console.log(results);
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
