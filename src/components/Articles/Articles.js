import React from "react";
import * as api from "../../Api";
//import { Link } from "@reach/router";
//import axios from "axios";
//import { handleSortArticles } from "../../Api";

class Articles extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState({
        articles
      });
    });
  }

  render() {
    return <div />;
  }
}

export default Articles;
