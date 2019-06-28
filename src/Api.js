import axios from "axios";

const request = axios.create({ baseURL: "https://dc-news.herokuapp.com/api" });

export const getArticles = ({ limit, topic, sort_by, order }) => {
  return request
    .get("/articles/", {
      params: {
        limit: limit,
        topic: topic,
        sort_by: sort_by,
        order: order
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

export const postComment = (articleId, author, body) => {
  return request
    .post(`/articles/${articleId}/comments`, {
      username: author,
      body: body
    })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = comment_id => {
  return request
    .delete(`/comments/${comment_id}`)
    .then(({ data: { comment } }) => {
      return comment;
    });
};
