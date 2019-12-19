import React from "react";
import FavResults from "./FavResults";

const Favourites = props => {
  return (
    <div>
      {props.favourite ? (
        <div className="favorites">
          <FavResults
            results={props.favouriteArray}
            favoriteSubmit={props.favoriteSubmit}
          />
        </div>
      ) : (
        <div className="home">
          <div className="hometext">
            <h1>What about beer?</h1>
            <p>
              You've got no favourite yet!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourites;
