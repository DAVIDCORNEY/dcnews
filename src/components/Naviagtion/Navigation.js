import React from "react";
import { Link } from "@reach/router";
import NavLink from "../NavLink/NavLink";
import LoginBox from "../LoginBox/LoginBox";
import LogoutBox from "../LogoutBox/LogoutBox";

const Navigation = ({ isLoggedIn, getLoggedInUser }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        DC NEWS
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/articles" className="nav-link">
              Articles
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              to="#"
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Topics
            </NavLink>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <NavLink to="/topics/coding" className="dropdown-item">
                Coding
              </NavLink>
              <NavLink to="/topics/cooking" className="dropdown-item">
                Cooking
              </NavLink>
              <NavLink to="/topics/football" className="dropdown-item">
                Football
              </NavLink>
            </div>
          </li>
        </ul>
        {isLoggedIn ? (
          <LogoutBox name={isLoggedIn} getLoggedInUser={getLoggedInUser} />
        ) : (
          <LoginBox getLoggedInUser={getLoggedInUser} />
        )}
      </div>
    </nav>
  );
};

export default Navigation;

// import React from "react";
// import { Link } from "@reach/router";

// const Navigation = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/articles">Articles</Link>
//         </li>
//         <li>
//           <Link to="/topics/coding">Coding</Link>
//         </li>
//         <li>
//           <Link to="/topics/cooking">Cooking</Link>
//         </li>
//         <li>
//           <Link to="/topics/football">Football</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;
