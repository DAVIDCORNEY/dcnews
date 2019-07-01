import React from "react";
import * as api from "../../Api";

const SortArticleButtons = ({ set, topic }) => {
  return (
    <div>
      <button
        onClick={() => {
          api.getArticles({ topic, sort_by: "created_at" }).then(articles => {
            set(articles);
          });
        }}
      >
        Sort By Date
      </button>
      <button
        onClick={() => {
          api
            .getArticles({ topic, sort_by: "comment_count" })
            .then(articles => {
              set(articles);
            });
        }}
      >
        Sort By Comment Count
      </button>
      <button
        onClick={() => {
          api.getArticles({ topic, sort_by: "votes" }).then(articles => {
            set(articles);
          });
        }}
      >
        Sort By Votes
      </button>
    </div>
  );
};

export default SortArticleButtons;
