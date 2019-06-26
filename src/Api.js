import React from "react";
import axios from "axios";

const request = axios.create({ baseURL: "https://dc-news.herokuapp.com/api" });

export const getArticles = limit => {
  return request
    .get("/articles/", {
      params: {
        limit: limit
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getSingleArticle = id => {
  return request.get(`/articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
};

// export const getTopics = topic => {
//   return request
//     .get("/articles/", {
//       params: {
//         topic: topic
//       }
//     })
//     .then(({ data: { articles } }) => {
//       return articles;
//     });
// };

export const getUser = username => {
  return request.get(`/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

export const getComments = comments => {
  return request
    .get(`/articles/${comments}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchArticleVotes = (article_id, increment) => {
  return request
    .patch(`/articles/${article_id}`, { inc_votes: increment })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const patchCommentVotes = (comment_id, increment) => {
  return request
    .patch(`/comments/${comment_id}`, { inc_votes: increment })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const handleSortArticles = sort_by => {
  return request
    .get("/articles/", {
      params: {
        sort_by: sort_by
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

// export const handleSortTopics = (topic, sort_by) => {
//   return request
//     .get("/articles/", {
//       params: {
//         topic: topic,
//         sort_by: sort_by
//       }
//     })
//     .then(({ data: { articles } }) => {
//       return articles;
//     });
// };

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
