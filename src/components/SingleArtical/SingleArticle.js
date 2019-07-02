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
    const { error, isLoading } = this.state;
    const {
      title,
      author,
      created_at,
      votes,
      body,
      article_id
    } = this.state.article;
    if (isLoading) return <LoadingSpinner />;
    if (error) return <Error error={error} />;
    const { isLoggedIn } = this.props;
    return (
      <div className="container">
        <div className="row mt-3">
          <article className="col-sm-12 card">
            <div className="card-body">
              <h1>{title}</h1>
              <h4>Username: {author}</h4>
              <h4>Posted on: {moment(created_at).format("LL")}</h4>
              <Vote
                article_id={article_id}
                votes={votes}
                isLoggedIn={isLoggedIn}
              />
              <p>{body}</p>
            </div>
          </article>
        </div>
        <Comments articleId={this.props.id} isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

export default SingleArticle;
