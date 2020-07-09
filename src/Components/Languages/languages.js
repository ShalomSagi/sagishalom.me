import React, { useState } from "react";
import classes from "./languages.module.scss";
import "./languages.animations.scss";

const Languages = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.list}>
        <div>
          <div className={classes.language}>
            <div className={props.isVisible ? "slide-up" : "zero-opacity"}>
              Hebrew
            </div>
          </div>
          <div className={classes.level}>
            <div className={props.isVisible ? "slide-down" : "zero-opacity"}>
              Native
            </div>
          </div>
        </div>
        <div>
          <div className={classes.language}>
            <div
              className={props.isVisible ? "slide-up" : "zero-opacity"}
              style={{ animationDelay: "0.4s" }}
            >
              English
            </div>
          </div>
          <div className={classes.level}>
            <div
              className={props.isVisible ? "slide-down" : "zero-opacity"}
              style={{ animationDelay: "0.4s" }}
            >
              Proficient
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
