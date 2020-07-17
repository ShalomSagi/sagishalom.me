import React from "react";
import classes from "./employmentHistory.module.scss";
import InfoBox from "../../Utils/InfoBox/infoBox";

const EmploymentHistory = (props) => {
  return (
    <div className={classes.employment}>
      <div className={classes.title}>Employment History</div>
      <InfoBox
        time="August 2019 - August 2020"
        title="Full Stack developer"
        at="at IDF Spokesperson Unit"
        achievements={[
          "Developed complex web apps using React, Redux, Node.js & TypeScript.",
          "Worked with CSS & SASS.",
          "Maintained Angular projects.",
          "Worked with MongoDB.",
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
