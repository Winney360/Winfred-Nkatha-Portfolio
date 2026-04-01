import React from "react";
import Navbar from "./components/Navbar";


import Hero from "./sections/Hero";

import FeaturedProject from "./sections/FeaturedProject";

import Projects from "./sections/Projects";

import Skills from "./sections/Skills";
import SocialProof from "./sections/SocialProof";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Experience />
      <SocialProof />
      {/* Contact will be added here */}
    </>
  );
}

export default App;
