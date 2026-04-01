import React from "react";
import Navbar from "./components/Navbar";


import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Projects />
      {/* Skills, Experience, SocialProof, Contact will be added here */}
    </>
  );
}

export default App;
