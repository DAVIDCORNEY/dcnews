import React, { Component } from "react";
import * as api from "../../Api";
import ArticleCard from "../ArticleCard/ArticleCard";
import SortButtons from "../SortButtons/SortButtons";

class Articles extends Component {
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

  setArticles = articles => {
    this.setState({
      articles
    });
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1>Articles</h1>
        <h3>Sort Articles</h3>
        <SortButtons setArticles={this.setArticles} />
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
