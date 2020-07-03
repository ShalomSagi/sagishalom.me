import React, { Component } from "react";
import "./codeEffect.scss";

import VisibilitySensor from "react-visibility-sensor";

class CodeEffect extends Component {
  state = { animadionDone: false, visible: false };

  //Showing the real HTML of the element
  reactComponentsAsText = (components, asText = false) => {
    let displayedCode = []; //An array of the children components as text

    if (Array.isArray(components)) {
      components.forEach((component) => {
        //Displaying the props
        const propsObj = { ...component.props }; //Creating an object with all the props of the child components
        const displayProps = []; //This array will be displayed later
        //Ignore children for now, will be dealt with later
        if ("children" in propsObj) delete propsObj.children;
        Object.keys(propsObj).forEach((prop) => {
          if (typeof propsObj[prop] !== "undefined") {
            displayProps.push(
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
        let child = "..."; //If somthing fails, it will show "..."
        try {
          if (typeof component.props !== "undefined") {
            if (typeof component.props.children === "string") {
              //Handling text as child)
              child = component.props.children;
            } else {
              //Looping again throw the children, but this time text is expected to be returned
              child = this.reactComponentsAsText(
                component.props.children,
                true
              );
            }
          }
        } catch (e) {}
        //Pushes the information that was taken from the component as text to the "text" array
        if (Array.isArray(child)) {
          child.forEach((childElement) => {
            displayedCode.push(childElement);
          });
        } else {
          displayedCode.push(
            `<${componnentType} ${
              displayProps.length !== 0 ? displayProps.join(" ") : ""
            }>${child}</${componnentType}>`
          );
        }
      });
      //If there is only one children
    } else {
      //Displaying the props
      const propsObj = { ...components.props }; //Creating an object with all the props of the child components
      const displayProps = []; //This array will be displayed later
      //Ignore children for now, will be dealt with later
      if ("children" in propsObj) delete propsObj.children;
      Object.keys(propsObj).forEach((prop) => {
        //Replacing the className prop with the more popular "class" attribute
        displayProps.push(
          //Replacing the className prop with the more popular "class" attribute
          `${prop === "className" ? "class" : prop}="${
            prop === "className" && propsObj[prop].includes("_")
              ? propsObj[prop].split("_")[1]
              : propsObj[prop]
          }"`
        );
      });

      let child = "..."; //If somthing fails, it will show "..."
      try {
        if (typeof components.props !== "undefined") {
          if (typeof components.props.children === "string") {
            //Handling text as child
            child = components.props.children;
          } else {
            //Looping again throw the children, but this time text is expected to be returned
            child = this.reactComponentsAsText(components.props.children, true);
          }
        }
      } catch (e) {}

      //Pushes the information that was taken from the component as text to the "text" array
      if (Array.isArray(child)) {
        child.forEach((childElement) => {
          displayedCode.push(childElement);
        });
      } else {
        displayedCode.push(
          `<${components.type} ${
            displayProps.length !== 0 ? displayProps.join(" ") : ""
          }>${child}</${components.type}>`
        );
      }
    }

    //Handling the animation timing with Timeout
    if (!asText) {
      setTimeout(() => {
        this.setState({ animadionDone: true });
        this.props.doneHandler();
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
          <div className="code">
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
