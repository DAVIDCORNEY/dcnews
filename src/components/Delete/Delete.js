import React from "react";
import * as api from "../../Api";
import * as utils from "../../utils";

const Delete = ({ comment_id, setComments, comments }) => {
  return (
    <div>
      <button
        onClick={() =>
          api
            .deleteComment(comment_id)
            .then(() => setComments(utils.filtered(comments, comment_id)))
        }
      >
        Delete Comment
      </button>
    </div>
  );
};

export default Delete;
