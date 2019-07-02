import React from "react";
import moment from "moment";

const Footer = () => {
  return (
    <footer className="container-fluid text-center bg-light p-4 mt-3">
      <h5>© {moment().format("YYYY")} Copyright: DC NEWS</h5>
    </footer>
  );
};

export default Footer;
