import React, { Component } from "react";

export class Mobile extends Component {
  render() {
    return this.props.children;
  }
}
export class Desktop extends Component {
  render() {
    return this.props.children;
  }
}

class Media extends Component {
  state = { width: 0 };

  makeTypeChecker(mediaRole) {
    return function (element) {
      return element.type === mediaRole;
    };
  }

  isMobile = this.makeTypeChecker(Mobile);
  isDesktop = this.makeTypeChecker(Desktop);

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    let children = [];
    if (this.state.width < 850) {
      children = this.props.children.filter((child) => this.isMobile(child));
    } else {
      children = this.props.children.filter((child) => this.isDesktop(child));
    }
    return <div>{children}</div>;
  }
}

export default Media;
