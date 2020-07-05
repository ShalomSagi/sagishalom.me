import React from "react";
import classes from "./personalProject.module.scss";
import InfoBox from "../../Utils/InfoBox/infoBox";
import CodeEffect from "../../Utils/CodeEffect/codeEffect";

const PersonalProject = () => {
  return (
    <div>
      <CodeEffect>
        <div className={classes.title}>Personal Project</div>
      </CodeEffect>
      <InfoBox
        title="Full-stack & UI/UX"
        time="May 2019 - March 2020"
        at="at SchoolFlix"
        achievements={[
          "Created a “Netflix” like UI.",
          "Developed using PHP & Vanilla JS.",
          "Worked with SQL database (MySQL).",
        ]}
        citation="SchoolFlix was distributed by the Ministry of Education."
      />
    </div>
  );
};

export default PersonalProject;
