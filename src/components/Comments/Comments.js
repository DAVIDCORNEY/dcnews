import React, { Component } from "react";
import * as api from "../../Api";
import AddComment from "../AddComment/AddComment";
import SingleComment from "../SingleComment/SingleComment";

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    const { articleId } = this.props;
    api.getComments(articleId).then(comments => {
      this.setState({ comments });
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
      <div>
        <h2>Comments</h2>
        {isLoggedIn && (
          <AddComment
            loggedInUser={isLoggedIn}
            articleId={articleId}
            upDateComments={this.upDateComments}
          />
        )}
        {comments.map(comment => {
          const { comment_id } = comment;
          return (
            <SingleComment
              comment={comment}
              comments={comments}
              key={comment_id}
              isLoggedIn={isLoggedIn}
              setComments={this.setComments}
            />
          );
        })}
      </div>
    );
  }
}

export default Comments;
