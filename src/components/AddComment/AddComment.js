import React, { Component } from "react";
import * as api from "../../Api";

class AddComment extends Component {
  state = {
    author: "",
    body: ""
  };

  handleUserInput = event => {
    const { loggedInUser } = this.props;
    const input = event.target.value;
    this.setState({
      author: loggedInUser,
      body: input
    });
  };

  handleSubmit = event => {
    const { upDateComments } = this.props;
    const { articleId } = this.props;
    event.preventDefault();
    const { author, body } = this.state;
    api
      .postComment(articleId, author, body)
      .then(comment => {
        upDateComments(comment);
        this.setState({ body: "" });
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
          <div className="form-group">
            <label for="comment">Comment Here</label>
            <textarea
              className="form-control-lg"
              id="comment"
              value={this.state.body}
              required
              onChange={this.handleUserInput}
            />
          </div>
          <div className="button">
            <button type="submit">Post Comment</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddComment;
