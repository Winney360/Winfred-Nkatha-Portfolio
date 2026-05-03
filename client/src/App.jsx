import React from "react";
import './index.css'

import Hero from "./sections/Hero";
import About from "./sections/About";
import FeaturedProject from "./sections/FeaturedProject";
import Projects from "./sections/Projects";
import Expertise from "./sections/Expertise";
import Experience from "./sections/Experience";
import SocialProof from "./sections/SocialProof";
import Contact from "./sections/Contact";
import TechMarquee from "./components/TechMarquee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-black pt-14 md:pt-20">
      <Navbar />
      <Hero />
      <TechMarquee />
      <FeaturedProject />
      <Projects />
      <Expertise/>
      <Experience />
      <About />
      <SocialProof />
      <Contact />
    </main>
  );
}

export default App;
