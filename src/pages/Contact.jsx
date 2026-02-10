import React from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <div className="page">
      <Helmet>
        <title>Contact | Simple React App</title>
        <meta
          name="description"
          content="Get in touch with the team behind the Simple React App demo."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Contact | Simple React App" />
        <meta
          property="og:description"
          content="Contact page for the Simple React App demo."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact | Simple React App" />
        <meta
          name="twitter:description"
          content="Contact page for the Simple React App demo."
        />
      </Helmet>

      <h1>Contact Page</h1>
      <p>This is a basic contact page without SEO-specific meta tags.</p>
    </div>
  );
}

export default Contact;

