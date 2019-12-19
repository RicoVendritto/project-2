import React from "react";
import FavResults from "./FavResults";

const Favourites = props => {
  return (
    <div className="favorites">
      {props.favourite ? (
        <FavResults
          results={props.favouriteArray}
          favoriteSubmit={props.favoriteSubmit}
        />
      ) : (
        <div>FALSE</div>
      )}
    </div>
  );
};

export default Favourites;
