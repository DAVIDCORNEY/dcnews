import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import SingleArticle from "./components/SingleArtical/SingleArticle";
import Articles from "./components/Articles/Articles";
import Topics from "./components/Topics/Topics";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";

class App extends Component {
  state = {
    loggedInUser: ""
  };

  componentDidMount() {
    const storedUser = localStorage.getItem("loggedIn");
    if (storedUser) {
      this.setState({
        loggedInUser: storedUser
      });
    }
  }

  getLoggedInUser = name => {
    localStorage.setItem("loggedIn", name);
    this.setState({
      loggedInUser: name
    });
  };

  render() {
    const isLoggedIn = this.state.loggedInUser;
    return (
      <div className="App">
        <Header
          getLoggedInUser={this.getLoggedInUser}
          isLoggedIn={isLoggedIn}
        />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Articles path="articles" />
          <SingleArticle path="/articles/:id" />
          <Topics path="/topics/:topic" />
          <Error default />
        </Router>
      </div>
    );
  }
}

export default App;
