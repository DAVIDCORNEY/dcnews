import React, { Component } from "react";
import * as api from "../../Api";
import ArticleCard from "../ArticleCard/ArticleCard";

class Home extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    api.getArticles(10).then(articles => {
      this.setState({
        articles
      });
    });
  }

  render() {
    const { articles } = this.state;
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
