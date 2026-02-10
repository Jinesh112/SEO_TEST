import React from "react";
import { Helmet } from "react-helmet-async";

function Pricing() {
  return (

    <Helmet>

        <title>Website</title>

        <meta name="description" content="Website description." />

        <meta name="robots" content="index,follow" />

        <meta property="og:title" content="Website" />

        <meta property="og:description" content="Website description." />

        <meta name="twitter:card" content="summary" />

        <meta name="twitter:title" content="Website" />

        <meta name="twitter:description" content="Website description." />

      </Helmet>

    <div className="page">
      <h1>Pricing Page</h1>
      <p>This is a simple pricing page without SEO meta tags.</p>
    </div>
  );
}

export default Pricing;

