import React from "react";
import * as api from "../../Api";

const Delete = ({ comment_id }) => {
  return (
    <div>
      <button onClick={() => api.deleteComment(comment_id)}>
        Delete Comment
      </button>
    </div>
  );
};

export default Delete;
