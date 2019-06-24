import axios from "axios";

//const baseUrl = "https://dc-news.herokuapp.com/api";

// export const getArticles = query => {
//   return axios
//     .get(`${baseUrl}/articles/${query}`)
//     .then(({ data: { articles } }) => {
//       return articles;
//     });
// };

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
