import React from "react";
import { Link } from "@reach/router";
import Navigation from "../Naviagtion/Navigation";
//import LoginBox from "./LoginBox";
//import LogoutBox from "./LogoutBox";

const Header = props => {
  return (
    <header className="header">
      <h1>DCNEWS</h1>
      <Navigation />
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