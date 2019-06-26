import React, { Component } from "react";
import axios from "axios";

class AddComment extends Component {
  state = {
    author: this.props.loggedInUser,
    body: ""
  };

  handleUserInput = event => {
    const input = event.target.value;
    this.setState({ body: input });
  };

  handleSubmit = event => {
    const { upDateComments } = this.props;
    const { articleId } = this.props;
    event.preventDefault();
    const { author, body } = this.state;
    return axios
      .post(
        `https://dc-news.herokuapp.com/api/articles/${articleId}/comments`,
        {
          username: author,
          body: body
        }
      )
      .then(({ data: { comment } }) => {
        upDateComments(comment);
      })
      .catch(err => {
        console.dir(err);
      });
  };

  render() {
    return (
      <div>
        <h2>Add a new comment</h2>
        <form id="commentForm" onSubmit={this.handleSubmit}>
          <label>
            comment
            <input
              type="text"
              id="comment"
              required
              onChange={this.handleUserInput}
            />
          </label>
          <div className="button">
            <button type="submit">Post Comment</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddComment;
