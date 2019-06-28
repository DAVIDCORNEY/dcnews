import React from "react";

const Error = ({ error }) => {
  console.log(error);
  return (
    <div>
      {error ? (
        <p>Sorry {error.response.data.msg}</p>
      ) : (
        <p>Sorry 404 Page not found</p>
      )}
    </div>
  );
};

export default Error;
