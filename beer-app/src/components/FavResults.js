import React from "react";

const FavResults = (props) => {
  console.log(props);
  // return (
  //   <div>FAVRESULTS</div>
  // )
  const results = props.results;
  return (
    <div className="beerResults">
      {results.map((result, index) => (
        <div key={index} className="indResults">
          <h2>{result.name}</h2>
          <h4>{result.tagline}</h4>
          <p>ABV {result.abv}%</p>
          <p>{result.description}</p>
          <img
            src={result.image_url}
            alt="Beer"
          />
          <i
            className="far fa-star fa-2x"
            onClick={e => props.favoriteSubmit(e, result)}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default FavResults;