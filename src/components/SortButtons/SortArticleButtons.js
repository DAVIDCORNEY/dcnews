import React from "react";
import * as api from "../../Api";

const SortArticleButtons = ({ setArticles, type, setTopics, topic }) => {
  return (
    <div>
      <button
        onClick={() => {
          api.getArticles({ topic, sort_by: "created_at" }).then(articles => {
            if (type === "articles") {
              setArticles(articles);
            }
            if (type === "topics") {
              setTopics(articles);
            }
          });
        }}
      >
        Date
      </button>
      <button
        onClick={() => {
          api
            .getArticles({ topic, sort_by: "comment_count" })
            .then(articles => {
              if (type === "articles") {
                setArticles(articles);
              }
              if (type === "topics") {
                setTopics(articles);
              }
            });
        }}
      >
        Comment Count
      </button>
      <button
        onClick={() => {
          api.getArticles({ topic, sort_by: "votes" }).then(articles => {
            if (type === "articles") {
              setArticles(articles);
            }
            if (type === "topics") {
              setTopics(articles);
            }
          });
        }}
      >
        Votes
      </button>
    </div>
  );
};

export default SortArticleButtons;
