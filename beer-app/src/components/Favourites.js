import React from "react";
import FavResults from "./FavResults";

const Favourites = props => {
  console.log(props);
  return <div>
  {props.favourite ? <FavResults results={props.favouriteArray} /> : <div>FALSE</div>
    }
  </div>
  // (
  //   <div>
  //     <FavResults results={props} />
  //   </div>
  // );
};

export default Favourites;
