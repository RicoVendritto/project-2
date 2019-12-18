import React from "react";

const Results = props => {
  console.log(props);
  const results = props.results.data;
  const slug = props.slug;
  const onerror = "http://pluspng.com/img-png/beer-bottle-png-hd-a-beer-bottle-beer-bottle-brown-foam-free-png-and-psd-650.jpg";
  return (
    <div className="results">
      {slug === "brn" || slug === "brc" ? (
        <div className="breweryResults">
          {results.map((result, index) => (
            <div key={index} className="indResults">
              <h2>{result.name}</h2>
              <h4>
                {result.city}, {result.country}
              </h4>
              <p>
                {result.phone} | {result.postal_code}
              </p>
              <a href={result.website_url}>Brewery Website</a>
            </div>
          ))}
        </div>
      ) : (
        <div className="beerResults">
          {results.map((result, index) => (
            <div key={index} className="indResults">
              <h2>{result.name}</h2>
              <h4>{result.tagline}</h4>
              <p>ABV {result.abv}%</p>
              <p>{result.description}</p>
              <img src={result.image_url} alt="Beer" onError={(e) => { e.target.onerror = null; e.target.src = { onerror } }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
