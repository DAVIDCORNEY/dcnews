import React, { Component } from "react";
import * as api from "../../Api";
import * as utils from "../../utils";
import ArticleCard from "../ArticleCard/ArticleCard";
import SortArticleButtons from "../SortButtons/SortArticleButtons";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Error from "../Error/Error";

class Topics extends Component {
  state = {
    articles: [],
    error: null,
    isLoading: true
  };

  componentDidMount() {
    const { topic } = this.props;
    api
      .getArticles({ topic })
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
    const { articles, error, isLoading } = this.state;
    const { topic } = this.props;
    if (isLoading) return <LoadingSpinner />;
    if (error) return <Error error={error} />;
    return (
      <div>
        <h1>{utils.capitalise(topic)}</h1>
        <h3>Sort Articles</h3>
        <SortArticleButtons
          setTopics={this.setTopics}
          type="topics"
          topic={topic}
        />
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
