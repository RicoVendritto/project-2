import React from "react";

const Landing = props => {
  return (
    <div className="landingPage">
      <img
        className="logoLanding"
        src="https://fontmeme.com/permalink/191217/3c69930b7c5f9da3debf12c8001bb84d.png"
        alt="Beer is Good for You"
      />
      <div className="buttonControl">
        <button onClick={e => props.ageValidation(e, false)}>
          I'm younger than 21
        </button>
        <button onClick={e => props.ageValidation(e, true)}>
          I'm 21 or older
        </button>
      </div>
    </div>
  );
};

export default Landing;
