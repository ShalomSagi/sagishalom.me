import React from "react";
import HeroSection from "./Components/HeroSection/heroSection";
import AboutMe from "./Components/AboutMe/aboutMe";
import Skills from "./Components/Skills/skills";
import EmploymentHistory from "./Components/EmploymentHistory/employmentHistory";
import Education from "./Components/Education/education";
import PersonalProject from "./Components/PersonalProject/personalProject";
import Freelance from "./Components/Freelance/freelance";
import Languages from "./Components/Languages/languages";

import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <HeroSection />
      <AboutMe />
      <Languages />
      <div className="double">
        <div className="row">
          <EmploymentHistory />
          <Freelance />
        </div>
        <div className="row">
          <Skills />
          <Education />
          <PersonalProject />
        </div>
      </div>
    </div>
  );
}

export default App;
