import React from "react";
import * as api from "../../Api";
import AddComment from "../AddComment/AddComment";

class Comments extends React.Component {
  state = {
    comments: []
  };

  componentDidMount() {
    const { comments } = this.props;
    api.getComments(comments).then(comments => {
      this.setState({ comments });
    });
  }

  render() {
    const { comments } = this.state;
    const { isLoggedIn } = this.props;
    return (
      <div>
        <h2>Comments</h2>
        {isLoggedIn && <AddComment />}
        {comments.map(comment => {
          const { author, votes, created_at, body, comment_id } = comment;
          return (
            <div key={comment_id}>
              <h3>{author}</h3>
              <h3>{votes}</h3>
              <h3>{created_at}</h3>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments;
