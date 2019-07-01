import React from "react";
import Votes from "../Vote/Vote";
import Delete from "../Delete/Delete";
import moment from "moment";

const SingleComment = ({ comment, isLoggedIn, setComments, comments }) => {
  const { author, votes, created_at, body, comment_id } = comment;
  return (
    <div key={comment_id}>
      <h3>User: {author}</h3>
      <h3>Posted on: {moment(created_at).format("LL")}</h3>
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
