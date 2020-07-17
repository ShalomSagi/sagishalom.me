import React, { Component } from "react";
import classes from "./heroSection.module.scss";
import "../../Utils/_shapes.scss";
import "../../Utils/_animations.scss";
import JobTitleEffect from "./JobTitleEffect/jobTitleEffect";

class HeroSection extends Component {
  state = {
    animationIsDone: false,
  };
  animationIsDone = () => {
    this.setState({ animationIsDone: true });
  };
  render() {
    return (
      <div className={classes.hero}>
        {this.state.animationIsDone ? (
          <React.Fragment>
            <div className="square top-right"></div>
            <div className="square bottom-left"></div>
            <div className={classes.social}>
              <ul className="one-by-one-up">
                <li>
                  <a
                    href="mailto:sagishalom1@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.email}
                    aria-label="Email"
                  />
                </li>
                <li>
                  <a
                    href="https://github.com/ShalomSagi/sagishalom.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.github}
                    aria-label="Github"
                  />
                </li>
                <li>
                  <a
                    href="//linkedin.com/in/sagishalom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.linkedin}
                    aria-label="Linkedin"
                  />
                </li>
              </ul>
            </div>
          </React.Fragment>
        ) : null}
        <h1>Sagi Shalom</h1>
        <JobTitleEffect
          onAnimationOver={this.animationIsDone}
          text="Web Developer"
        />
      </div>
    );
  }
}

export default HeroSection;
