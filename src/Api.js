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

export const getTopics = topic => {
  return request
    .get("/articles/", {
      params: {
        topic: topic
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const capitalise = word => {
  return word[0].toUpperCase() + word.slice(1);
};
