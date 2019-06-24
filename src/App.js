import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </div>
    );
  }
}

export default App;
