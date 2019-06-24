import React, { Component } from "react";
import axios from "axios";
import { getArticles } from "../../Api";

class Home extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    getArticles("?limit=10").then(articles => {
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
                {/* <Link to={`/articles/${article.article_id}`}> */}
                <h2>{title}</h2>
                {/* </Link> */}
                <h3>{author}</h3>
                <h3>{comment_count}</h3>
                <h3>Votes {votes}</h3>
                <h3>{created_at}</h3>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
