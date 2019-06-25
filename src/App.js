import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import SingleArticle from "./components/SingleArtical/SingleArticle";
import Articles from "./components/Articles/Articles";
import Topics from "./components/Topics/Topics";
import Header from "./components/Header/Header";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Articles path="articles" />
          <SingleArticle path="/articles/:id" />
          <Topics path="/topics/:topic" />
        </Router>
      </div>
    );
  }
}

export default App;
