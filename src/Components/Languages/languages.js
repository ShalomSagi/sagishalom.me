import React, { useState } from "react";
import classes from "./languages.module.scss";
import CodeEffect from "../../Utils/CodeEffect/codeEffect";

const Languages = () => {
  return (
    <div className={classes.wrapper}>
      <CodeEffect>
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
      </CodeEffect>
    </div>
  );
};

export default Languages;
