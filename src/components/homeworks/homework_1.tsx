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
        Check out my favorite website:{" "}
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

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>My First Webpage</title>
// </head>
// <body>
//   <!-- Headings -->
//   <h1>Welcome to My Webpage</h1>
//   <h2>About Me</h2>
//   <h3>My Hobbies</h3>
//   <h4>Favorite Foods</h4>
//   <h5>Travel Destinations</h5>
//   <h6>Contact Me</h6>

//   <!-- Paragraph -->
//   <p>Hello! My name is Alex, and I'm learning HTML. This is my first webpage, and I'm excited to share a little about myself.</p>

//   <!-- Image -->
//   <div>
//     <img src="profile.jpg" alt="A photo of me" width="200">
//   </div>

//   <!-- Unordered List -->
//   <h3>My Hobbies</h3>
//   <ul>
//     <li>Coding</li>
//     <li>Playing Guitar</li>
//     <li>Hiking</li>
//   </ul>

//   <!-- Ordered List -->
//   <h4>Favorite Foods</h4>
//   <ol>
//     <li>Pizza</li>
//     <li>Sushi</li>
//     <li>Ice Cream</li>
//   </ol>

//   <!-- Link -->
//   <p>Check out my favorite website: <a href="https://www.wikipedia.org" target="_blank">Wikipedia</a>.</p>

//   <!-- Div and Span -->
//   <div>
//     <p>I love <span style="color: blue;">coding</span> because it allows me to create cool things like this webpage!</p>
//   </div>

//   <!-- Contact Section -->
//   <h6>Contact Me</h6>
//   <p>You can reach me at <a href="mailto:alex@example.com">alex@example.com</a>.</p>
// </body>
// </html>
