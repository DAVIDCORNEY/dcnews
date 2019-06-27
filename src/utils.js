import React from "react";

export const capitalise = word => {
  return word[0].toUpperCase() + word.slice(1);
};

export const userMessage = message => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export const filtered = (comments, comment_id) => {
  return comments.filter(function(comment) {
    return comment_id !== comment.comment_id;
  });
};
