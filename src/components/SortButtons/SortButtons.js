import React from "react";
import * as api from "../../Api";

const SortButtons = ({ setArticles }) => {
  return (
    <div>
      <button>Date</button>
      <button
        onClick={() => {
          api.handleSortArticles("comment_count").then(articles => {
            setArticles(articles);
          });
        }}
      >
        Comment Count
      </button>
      <button
        onClick={() => {
          api.handleSortArticles("votes").then(articles => {
            setArticles(articles);
          });
        }}
      >
        Votes
      </button>
    </div>
  );
};

export default SortButtons;
