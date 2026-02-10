import React from "react";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <div className="page">
      <Helmet>
        <title>About | Simple React App</title>
        <meta
          name="description"
          content="Learn more about the Simple React App demo and its purpose."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="About | Simple React App" />
        <meta
          property="og:description"
          content="About page for the Simple React App demo."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About | Simple React App" />
        <meta
          name="twitter:description"
          content="About page for the Simple React App demo."
        />
      </Helmet>

      <h1>About Page</h1>
      <p>This is a simple about page without any SEO meta tags.</p>
    </div>
  );
}

export default About;

