import React from "react";
import classes from "./infoBox.module.scss";
import CodeEffect from "../CodeEffect/codeEffect";

const InfoBox = (props) => {
  return (
    <CodeEffect
      className={classes.center}
      style={{ minHeight: `${props.achievements.length * 41 + 83}px` }}
    >
      <div className={classes["history-item"]}>
        <div className={classes["title-area"]}>
          <div className={classes.time}>{props.time}</div>
          <div className={classes["job-title"]}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.at}>{props.at}</div>
          </div>
        </div>
        <div className={classes.achievements}>
          {props.achievements
            ? props.achievements.map((achievement, index) => {
                return (
                  <p className={classes.achievement} key={index}>
                    {achievement}
                  </p>
                );
              })
            : null}
          {props.citation ? (
            <p className={classes.citation}>{props.citation}</p>
          ) : null}
        </div>
      </div>
    </CodeEffect>
  );
};

export default InfoBox;
