import React from "react";
import classes from "./freelance.module.scss";
import CodeEffect from "../../Utils/CodeEffect/codeEffect";
import FreelanceItem from "./FreelanceItem/freelanceItem";
const Freelance = () => {
  return (
    <div className={classes.freelance}>
      <CodeEffect>
        <div className={classes.title}>Freelance Experience</div>
      </CodeEffect>
      <FreelanceItem
        title="Building UI For Web Apps"
        description="Mostly with React."
      />
      <FreelanceItem
        title="Branding & Graphic Design"
        description="Making a complete visual identity for clients."
      />
    </div>
  );
};

export default Freelance;
