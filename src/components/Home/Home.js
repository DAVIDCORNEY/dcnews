import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../Api";

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
        <ul>
          {articles.map(article => {
            const { title, author, comment_count, votes, created_at } = article;
            return (
              <div key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <h2>{title}</h2>
                </Link>
                <h3>Username: {author}</h3>
                <h3>Comments: {comment_count}</h3>
                <h3>Votes: {votes}</h3>
                <h3>Date: {created_at}</h3>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
