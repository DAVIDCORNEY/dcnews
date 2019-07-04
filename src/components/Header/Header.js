import React from "react";
import Navigation from "../Naviagtion/Navigation";

const Header = ({ isLoggedIn, getLoggedInUser }) => {
  return (
    <header className="header">
      <Navigation isLoggedIn={isLoggedIn} getLoggedInUser={getLoggedInUser} />
    </header>
  );
};

export default Header;
