import React, { Component } from "react";
import classes from "./skills.module.scss";
import "../../Utils/_shapes.scss";

import SkillsGroup from "./SkillsGroup/skillsGroup";
import CodeEffect from "../../Utils/CodeEffect/codeEffect";

class Skills extends Component {
  state = { animationDone: false };

  render() {
    return (
      <div className={classes.skills}>
        <CodeEffect>
          <div className={classes.title}>Skills</div>
        </CodeEffect>
        <div
          className={`${classes.effectWrapper} ${
            !this.state.animationDone ? classes["in-progress"] : ""
          }`}
        >
          <CodeEffect
            doneHandler={() => {
              this.setState({ animationDone: true });
            }}
          >
            <div className={classes["skills-list"]}>
              <SkillsGroup
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
                  skills={[
                    "Adobe After Effects",
                    "Adobe Illustrator",
                    "Adobe XD",
                    "Adobe Photoshop",
                    "Adobe Premiere",
                  ]}
                />
                <SkillsGroup
                  skills={[
                    "Team player",
                    "Self-learning",
                    "Working under pressure",
                    "Creative",
                  ]}
                />
              </div>
            </div>
          </CodeEffect>
        </div>
      </div>
    );
  }
}

export default Skills;
