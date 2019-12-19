import React, { Component } from "react";
import "./App.css";

//Custom Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ageCheck: false
    };
  }

  ageValidation = (e, boolean) => {
    e.preventDefault();
    if (!boolean) {
      window.open("http://www.nick.com");
    }
    this.setState({
      ageCheck: boolean
    });
  };

  render() {
    return (
      <div className="App">
        {!this.state.ageCheck ? (
          <Landing ageValidation={this.ageValidation} />
        ) : (
          <div>
            <Header />
            <Main />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default App;
