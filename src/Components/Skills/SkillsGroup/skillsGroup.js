import React from "react";
import classes from "./skillsGroup.module.scss";

const SkillsGroup = (props) => {
  return (
    <div className={classes["skills-group"]}>
      {props.skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
};

export default SkillsGroup;
