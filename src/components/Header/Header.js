import React from "react";
import { Link } from "@reach/router";
//import LoginBox from "./LoginBox";
//import LogoutBox from "./LogoutBox";

const Header = props => {
  return (
    <header className="header">
      <h1>DCNEWS</h1>
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
      {/* {props.isLoggedIn ? (
        <LogoutBox
          name={props.isLoggedIn}
          getLoggedInUser={props.getLoggedInUser}
        />
      ) : (
        <LoginBox getLoggedInUser={props.getLoggedInUser} />
      )} */}
    </header>
  );
};

export default Header;
