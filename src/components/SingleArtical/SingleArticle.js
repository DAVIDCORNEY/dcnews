import React, { Component } from "react";
import * as api from "../../Api";

class SingleArticle extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    const { id } = this.props;
    api.getSingleArticle(id).then(article => {
      this.setState({
        article
      });
    });
  }

  render() {
    const { title, author, created_at, votes, body } = this.state.article;
    return (
      <div>
        <article>
          <h1>{title}</h1>
          <h3>{author}</h3>
          <h3>{created_at}</h3>
          <h3>Votes {votes}</h3>
          <p>{body}</p>
        </article>
        {/* <Comments comments={this.props.id} /> */}
      </div>
    );
  }
}

export default SingleArticle;
