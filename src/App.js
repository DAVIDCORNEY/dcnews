import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home/Home";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Home path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
