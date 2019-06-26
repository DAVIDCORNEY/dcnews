import React from "react";
import * as api from "../../Api";

const SortArticleButtons = ({ setArticles }) => {
  return (
    <div>
      <button
        onClick={() => {
          api.handleSortArticles("created_at").then(articles => {
            setArticles(articles);
          });
        }}
      >
        Date
      </button>
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

export default SortArticleButtons;
