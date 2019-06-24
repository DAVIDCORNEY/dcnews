import axios from "axios";

const baseUrl = "https://dc-news.herokuapp.com/api";

export const getArticles = query => {
  return axios
    .get(`${baseUrl}/articles/${query}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};
