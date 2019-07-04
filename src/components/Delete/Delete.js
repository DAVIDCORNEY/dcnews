import React from "react";
import * as api from "../../Api";

const Delete = ({ comment_id, setComments, comments }) => {
  return (
    <div>
      <button
        className="btn btn-outline-danger mt-3"
        onClick={() =>
          api
            .deleteComment(comment_id)
            .then(() => setComments(filtered(comments, comment_id)))
        }
      >
        Delete Comment
      </button>
    </div>
  );
};

const filtered = (comments, comment_id) => {
  return comments.filter(function(comment) {
    return comment_id !== comment.comment_id;
  });
};

export default Delete;
