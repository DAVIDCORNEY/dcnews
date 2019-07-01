import React from "react";
import { Link } from "@reach/router";
import moment from "moment";

const ArticleCard = ({ article }) => {
  const { title, author, comment_count, votes, created_at } = article;
  return (
    <article className="row mt-3">
      <div className="col-sm-12 card">
        <div className="card-body">
          <Link to={`/articles/${article.article_id}`}>
            <h2 className="card-title">{title}</h2>
          </Link>
          <h4>Username: {author}</h4>
          <h4>Comments: {comment_count}</h4>
          <h4>Votes: {votes}</h4>
          <h4>Posted on: {moment(created_at).format("LL")}</h4>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
