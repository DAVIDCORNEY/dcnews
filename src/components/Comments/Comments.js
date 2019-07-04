import React, { Component } from "react";
import * as api from "../../Api";
import AddComment from "../AddComment/AddComment";
import SingleComment from "../SingleComment/SingleComment";
import "./Comments.css";

class Comments extends Component {
  state = {
    comments: [],
    error: null,
    isLoading: true
  };

  componentDidMount() {
    const { articleId } = this.props;
    api
      .getComments(articleId)
      .then(comments => {
        this.setState({
          comments,
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

  upDateComments = newComment => {
    this.setState(prevState => {
      return { comments: [newComment, ...prevState.comments] };
    });
  };

  setComments = comments => {
    this.setState({
      comments: comments
    });
  };

  render() {
    const { articleId } = this.props;
    const { comments } = this.state;
    const { isLoggedIn } = this.props;
    return (
      <>
        <div className="row mt-4 mb-4">
          <div className="col-sm-12">
            <h2>Comments</h2>
          </div>
        </div>
        {isLoggedIn && (
          <div className="row mb-3">
            <AddComment
              loggedInUser={isLoggedIn}
              articleId={articleId}
              upDateComments={this.upDateComments}
            />
          </div>
        )}
        {comments.map(comment => {
          const { comment_id } = comment;
          return (
            <div className="row mt-3" key={comment_id}>
              <div className="col-sm-12 card">
                <SingleComment
                  comment={comment}
                  comments={comments}
                  key={comment_id}
                  isLoggedIn={isLoggedIn}
                  setComments={this.setComments}
                />
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Comments;
