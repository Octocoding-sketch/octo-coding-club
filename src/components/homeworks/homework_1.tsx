import React from "react";

const homework1 = () => {
  return (
    <div>
      <h1>Welcome to My Webpage</h1>
      <h2>About Me</h2>
      <h3>Favorite Foods</h3>

      <p>
        Hello! My name is Alex, and Im learning HTML. This is my first webpage,
        and Im excited to share a little about myself.
      </p>

      <div>
        <img src="/example1.png" alt="A photo of me" width="400" />
      </div>

      <h3>Favorite Foods</h3>
      <ol>
        <li>Pizza</li>
        <li>Sushi</li>
        <li>Ice Cream</li>
      </ol>

      <p>
        Check out my favorite website:
        <a href="https://www.wikipedia.org" target="_blank">
          Wikipedia
        </a>
        .
      </p>

      <div>
        <p>
          I love <strong>coding</strong> because it allows me to create cool
          things like this webpage!
        </p>
      </div>

      <h2>Contact Me</h2>

      <p>
        You can reach me at{" "}
        <a target="_blank" href="mailto:alex@example.com">
          alex@example.com
        </a>
        .
      </p>
    </div>
  );
};

export default homework1;