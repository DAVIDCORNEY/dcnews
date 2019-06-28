import React, { Component } from "react";
import * as api from "../../Api";
import ArticleCard from "../ArticleCard/ArticleCard";
import Error from "../Error/Error";

class Home extends Component {
  state = {
    articles: [],
    error: null,
    isLoading: true
  };

  componentDidMount() {
    api
      .getArticles({ limit: 10 })
      .then(articles => {
        this.setState({
          articles,
          isLoading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err,
          isLoading: false
        });
      });
  }

  render() {
    const { articles, error, isLoading } = this.state;
    if (isLoading) return <div className="spinner" />;
    if (error) return <Error error={error} />;
    return (
      <div>
        <h1>Home Page</h1>
        <h2>Latest Articles</h2>
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

export default Home;
