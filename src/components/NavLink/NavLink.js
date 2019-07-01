import React from "react";
import { Link } from "@reach/router";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#0056b3" : "#047afb"
        }
      };
    }}
  />
);

export default NavLink;
