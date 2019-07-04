import React, { Component } from "react";
import * as api from "../../Api";
import "./AddComment.css";

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
      <div className="col-sm-12 mb-5">
        <h3>Add a new comment</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            {/* <label htmlFor="comment" /> */}
            <textarea
              className="form-control-lg"
              id="comment"
              value={this.state.body}
              required
              placeholder="Enter the debate!"
              onChange={this.handleUserInput}
            />
          </div>
          <div className="button">
            <button className="btn btn-outline-success" type="submit">
              Post Comment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddComment;
