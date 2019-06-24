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
