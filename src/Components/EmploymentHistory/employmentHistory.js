import React from "react";
import classes from "./employmentHistory.module.scss";
import InfoBox from "../../Utils/InfoBox/infoBox";
import CodeEffect from "../../Utils/CodeEffect/codeEffect";

const EmploymentHistory = (props) => {
  return (
    <div className={classes.employment}>
      <CodeEffect className={classes.center} style={{ margin: "70px 0" }}>
        <div className={classes.title}>Employment History</div>
      </CodeEffect>
      <InfoBox
        time="August 2019 - August 2020"
        title="Fullstack developer"
        at="at IDF Spokesperson Unit"
        achievements={[
          "Developed complex web apps using React & Node.js.",
          "Worked with CSS & SASS.",
          "Maintained Angular projects.",
          "Worked with NoSQL (MongoDB).",
          "Worked with Microsoft Azure.",
          "Integrated CI/CD pipelines.",
          "Worked with IDF’s highest ranking officers.",
        ]}
      />
      <InfoBox
        time="December 2017 - August 2019"
        title="Motion Designer"
        at="at IDF Spokesperson Unit"
        achievements={[
          "Built scripts and extensions for Adobe After Effects using JavaScript.",
          "Created motion graphics videos for public relations purposes.",
          "Created operational videos for the Israeli news channels.",
          "Worked with “Kan 11” channel on their movie “Eizenkot”.",
          "Designed for the IDF’s social media.",
          "Worked under pressure.",
          "Was in charge of graphic and motion designers recruitment.",
        ]}
        citation="Excellence Award from Division 36 commander."
      />
    </div>
  );
};

export default EmploymentHistory;
