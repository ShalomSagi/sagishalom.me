import React, { Component } from "react";
import classes from "./skills.module.scss";
import "../../Utils/_shapes.scss";

import VisibilitySensor from "react-visibility-sensor";
import SkillsGroup from "./SkillsGroup/skillsGroup";
import Languages from "../Languages/languages";

class Skills extends Component {
  state = { animationDone: false, isVisible: false };

  visibilityChangedHandler = (isVisible) => {
    if (!this.state.isVisible) {
      this.setState({ isVisible });
    }
  };

  render() {
    return (
      <VisibilitySensor
        partialVisibility
        offset={{ bottom: 200 }}
        onChange={(visible) => {
          this.visibilityChangedHandler(visible);
        }}
      >
        <div className={classes.skills}>
          <div className={classes.title}>Skills</div>
          <Languages isVisible={this.state.isVisible} />
          <div>
            <div className={classes["skills-list"]}>
              <SkillsGroup
                isVisible={this.state.isVisible}
                skills={[
                  "JavaScript ES2018",
                  "HTML",
                  "CSS / SASS",
                  "React",
                  "jQuery",
                  "Node.js",
                  "TypeScript",
                  "Angular",
                  "PHP",
                  "SQL / NoSQL",
                ]}
              />

              <div className={classes.stack}>
                <SkillsGroup
                  isVisible={this.state.isVisible}
                  skills={[
                    "Adobe After Effects",
                    "Adobe Illustrator",
                    "Adobe XD",
                    "Adobe Photoshop",
                    "Adobe Premiere",
                  ]}
                />
                <SkillsGroup
                  isVisible={this.state.isVisible}
                  skills={[
                    "Team player",
                    "Self-learning",
                    "Working under pressure",
                    "Creative",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

export default Skills;
