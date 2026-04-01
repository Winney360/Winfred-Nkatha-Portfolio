import React from "react";
import './index.css'
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import FeaturedProject from "./sections/FeaturedProject";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import SocialProof from "./sections/SocialProof";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Experience />
      <SocialProof />
      <Contact />
    </>
  );
}

export default App;
