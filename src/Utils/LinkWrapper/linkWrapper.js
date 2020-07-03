import React from "react";

const LinkWrapper = (props) => {
  let output;
  if (props.isLink) {
    output = (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  } else {
    output = props.children;
  }

  return output;
};

export default LinkWrapper;
