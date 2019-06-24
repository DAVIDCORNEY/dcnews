import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article, id }) => {
  const { title, author, comment_count, votes, created_at } = article;
  return (
    <article>
      <div>
        <Link to={`/articles/${article.article_id}`}>
          <h2>{title}</h2>
        </Link>
        <h3>Username: {author}</h3>
        <h3>Comments: {comment_count}</h3>
        <h3>Votes: {votes}</h3>
        <h3>Date: {created_at}</h3>
      </div>
    </article>
  );
};

export default ArticleCard;
