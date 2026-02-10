import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";
import FAQ from "./pages/FAQ.jsx";
import Pricing from "./pages/Pricing.jsx";
import { Helmet } from "react-helmet-async";

function App() {
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

    <div className="app">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
