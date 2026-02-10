import React from "react";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div className="page">
      <Helmet>
        <title>Home | Simple React App</title>
        <meta
          name="description"
          content="Welcome to the home page of the Simple React App demo."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Home | Simple React App" />
        <meta
          property="og:description"
          content="Home page of the Simple React App demo with React Router."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Home | Simple React App" />
        <meta
          name="twitter:description"
          content="Home page of the Simple React App demo."
        />
      </Helmet>

      <h1>Home Page</h1>
      <p>This is the home page of the app.</p>
    </div>
  );
}

export default Home;

