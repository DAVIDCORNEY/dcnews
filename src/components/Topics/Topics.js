import React, { Component } from "react";
import * as api from "../../Api";
import ArticleCard from "../ArticleCard/ArticleCard";

class Topics extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    const { topic } = this.props;
    api.getTopics(topic).then(articles => {
      this.setState({
        articles
      });
    });
  }

  render() {
    const { articles } = this.state;
    const { topic } = this.props;
    return (
      <div>
        <h1>{api.capitalise(topic)}</h1>
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

export default Topics;
