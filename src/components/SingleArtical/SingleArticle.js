import React, { Component } from "react";
import * as api from "../../Api";
import Comments from "../Comments/Comments";
import Vote from "../Vote/Vote";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Error from "../Error/Error";
import moment from "moment";

class SingleArticle extends Component {
  state = {
    article: {},
    error: null,
    isLoading: true
  };

  componentDidMount() {
    const { id } = this.props;
    api
      .getSingleArticle(id)
      .then(article => {
        this.setState({
          article,
          isLoading: false,
          error: null
        });
      })
      .catch(err => {
        console.dir(err);
        this.setState({
          error: err,
          isLoading: false
        });
      });
  }

  render() {
    const { error } = this.state;
    const {
      title,
      author,
      created_at,
      votes,
      body,
      article_id,
      isLoading
    } = this.state.article;
    if (isLoading) return <LoadingSpinner />;
    if (error) return <Error error={error} />;
    const { isLoggedIn } = this.props;
    return (
      <div>
        <article>
          <h1>{title}</h1>
          <h3>Username: {author}</h3>
          <h3>Posted on: {moment(created_at).format("LL")}</h3>
          <Vote article_id={article_id} votes={votes} isLoggedIn={isLoggedIn} />
          <p>{body}</p>
        </article>
        <Comments articleId={this.props.id} isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

export default SingleArticle;
