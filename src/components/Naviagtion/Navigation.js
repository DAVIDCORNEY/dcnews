import React from "react";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/topics/coding">Coding</Link>
        </li>
        <li>
          <Link to="/topics/cooking">Cooking</Link>
        </li>
        <li>
          <Link to="/topics/football">Football</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
