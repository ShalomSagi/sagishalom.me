import React, { useState } from "react";
import "./infoBox.animations.scss";
import classes from "./infoBox.module.scss";
import VisibilitySensor from "react-visibility-sensor";

const InfoBox = (props) => {
  const [isVisible, setVisiblilty] = useState(false);
  return (
    <VisibilitySensor
      partialVisibility
      offset={{ bottom: 200 }}
      onChange={(newVisibility) => {
        if (!isVisible) {
          setVisiblilty(newVisibility);
        }
      }}
    >
      <div className={classes["history-item"]}>
        <div className={classes["title-area"]}>
          <div
            className={`${classes.time} ${
              isVisible ? "fade-in-left-bottom" : "zero-opacity"
            }`}
          >
            {props.time}
          </div>
          <div
            className={`${classes["job-title"]} ${
              isVisible ? "fade-in" : "zero-opacity"
            }`}
          >
            <div className={classes.title}>{props.title}</div>
            <div className={classes.at}>{props.at}</div>
          </div>
        </div>
        <div className={classes.achievements}>
          {props.achievements
            ? props.achievements.map((achievement, index) => {
                return (
                  <p
                    className={`${classes.achievement} ${
                      isVisible ? "fade-in-bottom" : "zero-opacity"
                    }`}
                    key={index}
                  >
                    {achievement}
                  </p>
                );
              })
            : null}
          {props.citation ? (
            <p
              className={`${classes.citation} - ${
                isVisible ? "fade-in-bottom" : "zero-opacity"
              }`}
            >
              {props.citation}
            </p>
          ) : null}
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default InfoBox;
