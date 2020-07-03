import React from "react";
import HeroSection from "./Components/HeroSection/heroSection";
import AboutMe from "./Components/AboutMe/aboutMe";
import Skills from "./Components/Skills/skills";

import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <HeroSection />
      <AboutMe />
      <div className="double">
        <div></div>
        <Skills />
      </div>
    </div>
  );
}

export default App;
