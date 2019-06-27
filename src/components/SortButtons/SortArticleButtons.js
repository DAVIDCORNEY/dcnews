import React from "react";
import * as api from "../../Api";

const SortArticleButtons = ({ setArticles }) => {
  return (
    <div>
      <button
        onClick={() => {
          api.getArticles("created_at").then(articles => {
            setArticles(articles);
          });
        }}
      >
        Date
      </button>
      <button
        onClick={() => {
          api.getArticles("comment_count").then(articles => {
            setArticles(articles);
          });
        }}
      >
        Comment Count
      </button>
      <button
        onClick={() => {
          api.getArticles("votes").then(articles => {
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
