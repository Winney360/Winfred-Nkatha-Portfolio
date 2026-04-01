import React from "react";
import Navbar from "./components/Navbar";


import Hero from "./sections/Hero";

import FeaturedProject from "./sections/FeaturedProject";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Projects />
      <Skills />
      {/* Experience, SocialProof, Contact will be added here */}
    </>
  );
}

export default App;
