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

// import React from "react";
// import Navigation from "../Naviagtion/Navigation";
// import LoginBox from "../LoginBox/LoginBox";
// import LogoutBox from "../LogoutBox/LogoutBox";

// const Header = props => {
//   return (
//     <header className="header">
//       <Navigation />
//       {props.isLoggedIn ? (
//         <LogoutBox
//           name={props.isLoggedIn}
//           getLoggedInUser={props.getLoggedInUser}
//         />
//       ) : (
//           <LoginBox getLoggedInUser={props.getLoggedInUser} />
//         )}
//     </header>
//   );
// };

// export default Header;
