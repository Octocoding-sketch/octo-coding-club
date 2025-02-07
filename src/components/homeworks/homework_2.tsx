import React from "react";
import "./hmwrk_2.css";

const homework_2 = () => {
  return (
    <body>
      <div className="container">
        <h1>Welcome to My Styled Webpage</h1>
        <h2>About Me</h2>
        <p>
          Hello! My name is <span className="highlight">Alex</span>, and {`I'm`}
          learning how to use <span className="highlight2">CSS</span> to make my webpages look amazing.
        </p>
        <p>
          This is a simple example of how to style HTML elements using CSS.{" "}
          {`I'm`}
          excited to share my progress with you!
        </p>

        <h2>My Hobbies</h2>
        <ul>
          <li>Coding</li>
          <li>Playing Guitar</li>
          <li>Hiking</li>
        </ul>

        <h2>My Favorite Website</h2>
        <p>
          Check out my favorite website:{" "}
          <a href="https://www.wikipedia.org" target="_blank">
            Wikipedia
          </a>
          .
        </p>

        <h2>My Photo</h2>
        <img src="/example1.png" alt="A photo of me" />
      </div>
    </body>
  );
};

export default homework_2;
