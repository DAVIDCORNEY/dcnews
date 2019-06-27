import React, { Component } from "react";
import * as api from "../../Api";
import * as utils from "../../utils";
import ArticleCard from "../ArticleCard/ArticleCard";
import SortArticleButtons from "../SortButtons/SortArticleButtons";

class Topics extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    const { topic } = this.props;
    api.getArticles({ topic }).then(articles => {
      this.setState({
        articles
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      const { topic } = this.props;
      api.getArticles({ topic }).then(articles => {
        this.setState({
          articles
        });
      });
    }
  }

  setTopics = articles => {
    this.setState({
      articles
    });
  };

  render() {
    const { articles } = this.state;
    const { topic } = this.props;
    return (
      <div>
        <h1>{utils.capitalise(topic)}</h1>
        <h3>Sort Articles</h3>
        <SortArticleButtons setTopics={this.setTopics} />
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
