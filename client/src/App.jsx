import React from "react";
import Navbar from "./components/Navbar";

import FeaturedProject from "./sections/FeaturedProject";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProject />
      {/* Projects, Skills, Experience, SocialProof, Contact will be added here */}
    </>
  );
}

export default App;
