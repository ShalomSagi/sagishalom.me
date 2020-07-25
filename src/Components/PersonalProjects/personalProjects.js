import React from "react";
import classes from "./personalProjects.module.scss";
import InfoBox from "../../Utils/InfoBox/infoBox";
import CodeEffect from "../../Utils/CodeEffect/codeEffect";

const PersonalProject = () => {
  return (
    <div>
      <div className={classes.title}>Personal Projects</div>
      <InfoBox
        title="Full Stack & UI/UX"
        time="May 2019 - March 2020"
        at="at SchoolFlix"
        achievements={[
          "Created a “Netflix” like UI.",
          "Developed using PHP & Vanilla JS.",
          "Worked with SQL database (MySQL).",
        ]}
        citation="SchoolFlix was distributed by the Ministry of Education."
      />
      <InfoBox
        title="Front-end Developer"
        time="September 2017 - December 2017"
        at="at Squid"
        achievements={["Developed a native iOS app using Swift."]}
      />
      <InfoBox
        title="Front-end Developer"
        time="April 2015 - September 2017"
        at="at Eyfo"
        achievements={["Developed a native Android app using Java."]}
      />
    </div>
  );
};

export default PersonalProject;
