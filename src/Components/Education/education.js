import React from "react";
import InfoBox from "../../Utils/InfoBox/infoBox";
import classes from "./education.module.scss";
const Education = () => {
  return (
    <div className={classes.education}>
      <div className={classes.title}>Education</div>
      <InfoBox
        time="September 2015 - April 2017"
        title="Cinematography"
        at="at Ort Psagot, Karmiel"
        achievements={["Practical Engineering, Majoring Animation."]}
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
