import React from "react";
import HeroSection from "./Components/HeroSection/heroSection";
import AboutMe from "./Components/AboutMe/aboutMe";
import Skills from "./Components/Skills/skills";
import EmploymentHistory from "./Components/EmploymentHistory/employmentHistory";
import Education from "./Components/Education/education";
import PersonalProjects from "./Components/PersonalProjects/personalProjects";
import Footer from "./Components/Footer/footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <HeroSection />
      <AboutMe />

      <EmploymentHistory />
      <PersonalProjects />
      <Education />
      <Skills />

      <Footer />
    </div>
  );
}

export default App;
