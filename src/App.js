import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import SingleArticle from "./components/SingleArtical/SingleArticle";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <SingleArticle path="/articles/:id" />
        </Router>
      </div>
    );
  }
}

export default App;
