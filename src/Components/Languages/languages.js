import React from "react";
import classes from "./languages.module.scss";

const Languages = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.list}>
        <div>
          <div className={classes.language}>Hebrew</div>
          <div className={classes.level}>Native</div>
        </div>
        <div>
          <div className={classes.language}>English</div>
          <div className={classes.level}>Proficient</div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
