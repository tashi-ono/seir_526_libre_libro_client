import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; Copyright 2020 NSCoen</p>
      <span>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        and <a href="https://icons8.com">Icons8.</a>
      </span>
      <span>
        {" "}
        Photo by{" "}
        <a href="https://unsplash.com/@hitoshi_suzuki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Hitoshi Suzuki
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/books?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash.
        </a>
      </span>
    </div>
  );
};

export default Footer;
