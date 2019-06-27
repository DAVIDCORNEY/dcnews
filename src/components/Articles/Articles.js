import React, { Component } from "react";
import * as api from "../../Api";
import ArticleCard from "../ArticleCard/ArticleCard";
import SortArticleButtons from "../SortButtons/SortArticleButtons";
import Error from "../Error/Error";

class Articles extends Component {
  state = {
    articles: [],
    error: null,
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api
      .getArticles({})
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
  };

  setArticles = articles => {
    this.setState({
      articles
    });
  };

  render() {
    const { articles, error, isLoading } = this.state;
    if (isLoading) return <div className="spinner" />;
    if (error) return <Error error={error} />;
    return (
      <div>
        <h1>Articles</h1>
        <h3>Sort Articles</h3>
        <SortArticleButtons setArticles={this.setArticles} type="articles" />
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
