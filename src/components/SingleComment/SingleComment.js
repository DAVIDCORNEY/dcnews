import React from "react";
import Votes from "../Vote/Vote";
import Delete from "../Delete/Delete";
import moment from "moment";

const SingleComment = ({ comment, isLoggedIn, setComments, comments }) => {
  const { author, votes, created_at, body, comment_id } = comment;
  return (
    <div className="card-body" key={comment_id}>
      <h4>User: {author}</h4>
      <h4>Posted on: {moment(created_at).format("LL")}</h4>
      <Votes comment_id={comment_id} votes={votes} isLoggedIn={isLoggedIn} />
      {isLoggedIn === author && (
        <Delete
          comment_id={comment_id}
          setComments={setComments}
          comments={comments}
        />
      )}
      <p>{body}</p>
    </div>
  );
};

export default SingleComment;

// import React, { Component } from "react";
// import Votes from "../Vote/Vote";
// import Delete from "../Delete/Delete";
// import moment from "moment";

// class SingleComment extends Component {
//   state = {
//     comment: {}
//   };

//   componentDidMount() {
//     this.setState({
//       comment: this.props.comment
//     });
//   }

//   setComment = () => {
//     this.setState({});
//   };

//   render() {
//     const { isLoggedIn } = this.props;
//     const { author, votes, created_at, body, comment_id } = this.state.comment;
//     return (
//       <div className="card-body" key={comment_id}>
//         <h4>User: {author}</h4>
//         <h4>Posted on: {moment(created_at).format("LL")}</h4>
//         <Votes comment_id={comment_id} votes={votes} isLoggedIn={isLoggedIn} />
//         {isLoggedIn === author && (
//           <Delete comment_id={comment_id} setComment={this.setComment} />
//         )}
//         <p>{body}</p>
//       </div>
//     );
//   }
// }

// export default SingleComment;
