import React from "react";
import classes from "./freelanceItem.module.scss";
import CodeEffect from "../../../Utils/CodeEffect/codeEffect";
const FreelanceItem = (props) => {
  return (
    <CodeEffect>
      <div className={classes["freelance-item"]}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.description}>{props.description}</div>
      </div>
    </CodeEffect>
  );
};

export default FreelanceItem;
