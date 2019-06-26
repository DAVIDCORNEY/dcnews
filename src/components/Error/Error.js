import React from "react";

const Error = ({ error }) => {
  return (
    <div>{error ? <p>response.data.message</p> : <p>Page not found</p>}</div>
  );
};

export default Error;
