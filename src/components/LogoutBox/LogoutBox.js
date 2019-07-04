import React from "react";

const LogoutBox = ({ getLoggedInUser, name }) => {
  return (
    <div>
      <h5>Welcome {name}</h5>
      <button
        className="btn btn-outline-success"
        onClick={() => getLoggedInUser("")}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutBox;
