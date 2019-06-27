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

// render() {
//   const { articleId } = this.props;
//   const { comments } = this.state;
//   const { isLoggedIn } = this.props;
//   return (
//     <div>
//       <h2>Comments</h2>
//       {isLoggedIn && (
//         <AddComment
//           loggedInUser={isLoggedIn}
//           articleId={articleId}
//           upDateComments={this.upDateComments}
//         />
//       )}
//       {comments.map(comment => {
//         const { author, votes, created_at, body, comment_id } = comment;
//         return (
//           <div key={comment_id}>
//             <h3>User: {author}</h3>
//             <h3>Date: {created_at}</h3>
//             <Votes
//               comment_id={comment_id}
//               votes={votes}
//               isLoggedIn={isLoggedIn}
//             />
//             {isLoggedIn === author && (
//               <Delete
//                 comment_id={comment_id}
//                 //setComments={this.setComments}
//                 comments={comments}
//               />
//             )}
//             <p>{body}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
