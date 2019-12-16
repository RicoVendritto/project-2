import React from "react";

const Landing = props => {
  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={e => props.ageValidation(e, false)}>
        I'm younger than 21
      </button>
      <button onClick={e => props.ageValidation(e, true)}>
        I'm 21 or older
      </button>
    </div>
  );
};

export default Landing;
