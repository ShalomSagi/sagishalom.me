import React, { Component } from "react";
import classes from "./skills.module.scss";
import "../../Utils/_shapes.scss";

import SkillsGroup from "./SkillsGroup/skillsGroup";
import Languages from "../Languages/languages";

class Skills extends Component {
  state = { animationDone: false };

  render() {
    return (
      <div className={classes.skills}>
        <div className={classes.title}>Skills</div>
        <Languages />
        <div>
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
        </div>
      </div>
    );
  }
}

export default Skills;
