import React from "react";

const LogoutBox = ({ getLoggedInUser, name }) => {
  return (
    <div>
      <h5>Welcome {name}</h5>
      <div className="button">
        <button onClick={() => getLoggedInUser("")}>Logout</button>
      </div>
    </div>
  );
};

export default LogoutBox;
