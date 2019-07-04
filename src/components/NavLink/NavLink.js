import React from "react";
import { Link } from "@reach/router";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#343a40" : "#6c757d"
        }
      };
    }}
  />
);

export default NavLink;
