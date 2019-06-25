import React from "react";

const LogoutBox = props => {
  return (
    <div>
      <h3>Welcome {props.name}</h3>
      <div className="button">
        <button onClick={() => props.getLoggedInUser("")}>Logout</button>
      </div>
    </div>
  );
};

export default LogoutBox;
