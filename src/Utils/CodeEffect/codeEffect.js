import React, { Component } from "react";
import "./codeEffect.scss";

import VisibilitySensor from "react-visibility-sensor";

class CodeEffect extends Component {
  state = { animadionDone: false, visible: false };

  //Parsing the HTML of the component as text
  reactComponentsAsText = (components, asText = false) => {
    let displayedCode = [];

    if (Array.isArray(components)) {
      components.forEach((component) => {
        const propsObj = { ...component.props };
        const attributes = [];

        //Ignore children for now, will be dealt with later
        if ("children" in propsObj) delete propsObj.children;
        Object.keys(propsObj).forEach((prop) => {
          if (typeof propsObj[prop] !== "undefined") {
            attributes.push(
              //Replacing the className prop with the more popular "class" attribute
              `${prop === "className" ? "class" : prop}="${
                prop === "className" && propsObj[prop].includes("_")
                  ? propsObj[prop].split("_")[1]
                  : propsObj[prop]
              }"`
            );
          }
        });

        //Getting the tag name
        let componnentType = component.type.name;
        if (typeof componnentType === "undefined") {
          componnentType = component.type;
        }

        //Displating the children components.
        let child = "...";
        try {
          if (typeof component.props !== "undefined") {
            if (typeof component.props.children === "string") {
              child = component.props.children;
            } else {
              child = this.reactComponentsAsText(
                component.props.children,
                true
              );
            }
          }
        } catch (e) {}

        if (Array.isArray(child)) {
          child.forEach((childElement) => {
            displayedCode.push(childElement);
          });
        } else {
          displayedCode.push(
            `<${componnentType} ${attributes.join(
              " "
            )}>${child}</${componnentType}>`
          );
        }
      });
    } else {
      const propsObj = { ...components.props };
      const attributes = [];

      //Ignore children for now, will be dealt with later
      if ("children" in propsObj) delete propsObj.children;
      Object.keys(propsObj).forEach((prop) => {
        attributes.push(
          //Replacing the className prop with the more popular "class" attribute
          `${prop === "className" ? "class" : prop}="${
            prop === "className" && propsObj[prop].includes("_")
              ? propsObj[prop].split("_")[1]
              : propsObj[prop]
          }"`
        );
      });

      let child = "...";
      try {
        if (typeof components.props !== "undefined") {
          if (typeof components.props.children === "string") {
            child = components.props.children;
          } else {
            child = this.reactComponentsAsText(components.props.children, true);
          }
        }
      } catch (e) {}

      if (Array.isArray(child)) {
        child.forEach((childElement) => {
          displayedCode.push(childElement);
        });
      } else {
        displayedCode.push(
          `<${components.type} ${attributes.join(" ")}>${child}</${
            components.type
          }>`
        );
      }
    }

    //Handling the animation timing with Timeout
    if (!asText) {
      setTimeout(() => {
        this.setState({ animadionDone: true });
        if (this.props.doneHandler) {
          this.props.doneHandler();
        }
      }, 55.56 * displayedCode.length + 900);
    }

    if (asText) {
      return displayedCode;
    } else {
      return displayedCode.map((line, index) => {
        return (
          <div key={index} className={`line-${index + 1}`}>
            {line}
          </div>
        );
      });
    }
  };

  //Starting the animation when the component is visible in the screen
  enteredTheScreen = (isVisible) => {
    if (!this.state.visible && isVisible) {
      this.setState({ visible: true });
    }
  };

  render() {
    //Desiding the content of the component
    let content = <div className="visibility-checker"></div>;
    if (this.state.visible) {
      if (!this.state.animadionDone) {
        content = (
          <div
            className={`code ${this.props.className || ""}`}
            style={this.props.style}
          >
            {this.reactComponentsAsText(this.props.children)}
          </div>
        );
      } else {
        content = <div className="result">{this.props.children}</div>;
      }
    }

    return (
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible) => {
          this.enteredTheScreen(isVisible);
        }}
      >
        {content}
      </VisibilitySensor>
    );
  }
}

export default CodeEffect;
