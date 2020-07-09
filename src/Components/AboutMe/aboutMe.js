import React from "react";
import classes from "./aboutMe.module.scss";
import CodeEffect from "../../Utils/CodeEffect/codeEffect";

const AboutMe = () => {
  return (
    <div className={classes["about-me"]}>
      <CodeEffect
        style={{ fontSize: "15pt", margin: "10px 0", padding: "8px 0 0 " }}
      >
        <div className={classes.title}>Who Am I?</div>
      </CodeEffect>
      <div className={classes.content}>
        <CodeEffect className={classes.code}>
          <p>
            <b>Passionate front-end developer</b> with back-end experience and a
            strong sense for aesthetics.
          </p>
          <p>
            <b>Technology enthusiastic</b> with the ability and the desire to
            learn new subjects.
          </p>
          <p>
            Looking for a position where my current skills can bring value and
            where I can gain new skills and experience.
          </p>
          <div className={classes.center}>
            <a
              href="/download/CV-Sagi-Shalom.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.download}
            >
              Take a look at my CV
            </a>
          </div>
        </CodeEffect>
      </div>
    </div>
  );
};

export default AboutMe;
