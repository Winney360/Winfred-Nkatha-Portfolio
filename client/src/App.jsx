import React from "react";
import Navbar from "./components/Navbar";


import Hero from "./sections/Hero";

import FeaturedProject from "./sections/FeaturedProject";

import Projects from "./sections/Projects";
import Experience from "./sections/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Experience />
      {/* SocialProof, Contact will be added here */}
    </>
  );
}

export default App;
