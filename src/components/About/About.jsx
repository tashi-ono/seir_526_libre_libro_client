import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-page-text">
        <h1>About</h1>
        <p>
          Libre Libro is an app to help you locate and pin Little Free Libraries
          on a map. Little Free Libraries are tiny libraries that people have
          built near their homes to swap books with neighbors taking a leisurely
          stroll. Take a book, leave a book, and discover local treasures in you
          area. Don't forget to leave a comment or two about the library or any
          fun books you've come across.
        </p>
        <p>Disclaimer: For now, this app only works properly in the US.</p>
      </div>
    </div>
  );
};

export default About;
