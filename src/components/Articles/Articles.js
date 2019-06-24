import React from "react";
import * as api from "../../Api";
//import { Link } from "@reach/router";
//import axios from "axios";
//import { handleSortArticles } from "../../Api";
import ArticleCard from "../ArticleCard/ArticleCard";

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
    const { articles } = this.state;
    return (
      <div>
        <h1>Articles Page</h1>
        <section>
          {articles.map(article => {
            const { article_id } = article;
            return <ArticleCard article={article} key={article_id} />;
          })}
        </section>
      </div>
    );
  }
}

export default Articles;
