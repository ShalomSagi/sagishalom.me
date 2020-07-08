import React from "react";
import InfoBox from "../../Utils/InfoBox/infoBox";
import classes from "./education.module.scss";
import CodeEffect from "../../Utils/CodeEffect/codeEffect";
const Education = () => {
  return (
    <div className={classes.education}>
      <CodeEffect className={classes.center} style={{ margin: "70px 0" }}>
        <div className={classes.title}>Education</div>
      </CodeEffect>
      <InfoBox
        time="September 2015 - April 2017"
        title="Cinematography"
        at="at Ort Psagot, Karmiel"
        achievements={["Practical Engineering - Majoring Animation."]}
      />
      <InfoBox
        time="July 2015"
        title="Graduated Highschool"
        at="at Ort Psagot, Karmiel"
        achievements={["Matriculation certificate."]}
      />
    </div>
  );
};

export default Education;
