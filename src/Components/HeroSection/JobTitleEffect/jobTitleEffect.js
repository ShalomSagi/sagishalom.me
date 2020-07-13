import React, { Component } from "react";
import "./jobTitleEffect.scss";

class CodeWriterEffect extends Component {
  state = {
    isDoneTyping: false,
    startTheHidingAnimation: false,
    writingProgress: [],
  };

  currentCharIndex = 0;
  currentWordIndex = 0;

  code = [
    {
      text: "<",
      color: "gray",
    },
    {
      text: "h1 ",
      color: "blue",
    },
    {
      text: "class",
      color: "lightblue",
    },
    {
      text: "=",
      color: "white",
    },
    {
      text: '"job-title"',
      color: "orange",
    },
    {
      text: ">",
      color: "gray",
    },
    {
      text: this.props.text,
      color: "white",
    },
    {
      text: "</",
      color: "gray",
    },
    {
      text: "h1",
      color: "blue",
    },
    {
      text: ">",
      color: "gray",
    },
  ];

  componentDidMount() {
    this.writeCode();
  }

  writeCode = () => {
    setTimeout(() => {
      let currentWord = this.code[this.currentWordIndex];
      let writingProgress = [...this.state.writingProgress]; //get the text that is already written

      writingProgress.push(currentWord.text.charAt(this.currentCharIndex));

      this.setState({ writingProgress });

      if (this.currentCharIndex < currentWord.text.length) {
        this.currentCharIndex++;
        this.writeCode();
      } else if (this.currentWordIndex < this.code.length - 1) {
        //If the animation is done for the current word, go to the next word
        this.currentCharIndex = 0;
        this.currentWordIndex++;
        this.writeCode();
      } else {
        //the typing animation is done.
        this.setState({ startTheHidingAnimation: true }, () => {
          this.props.onAnimationOver();
          //Handling the animation timing with Timeout
          setTimeout(() => {
            this.setState({ isDoneTyping: true });
          }, 1000);
        });
      }
    }, this.getRandomNumber(40, 100));
  };

  //For more natural random typing pace
  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /*
  Returning the chars whose position is between the "from" value and the "to" value.

  That's function is made to return the current typing progress when it's called
  inside the <span> tag, so the text can be colored.
  */
  getTextToAppend(from, to) {
    let alltext = [];
    for (let i = 0; i < to - from; i++) {
      alltext.push(this.state.writingProgress[i + from]);
    }
    return alltext.join("");
  }

  render = () => {
    let displayedElement = null;

    if (this.state.isDoneTyping) {
      displayedElement = (
        <div className="job-title">
          <div className="text">{this.props.text}</div>
        </div>
      );
    } else {
      let lastCharIndex = 0;
      displayedElement = (
        <div
          className={`typing ${
            this.state.startTheHidingAnimation
              ? "hide" // The hide class is responsible for the sliding out animation
              : ""
          }`}
        >
          {this.code.map((chunk, index) => {
            let from = lastCharIndex;
            lastCharIndex = lastCharIndex + chunk.text.length + 1;
            let to = lastCharIndex;

            let currentProgress = this.getTextToAppend(from, to);

            return (
              <span className={chunk.color} key={index}>
                {currentProgress}
              </span>
            );
          })}
        </div>
      );
    }
    return <div style={{ minHeight: "25px" }}>{displayedElement}</div>;
  };
}

export default CodeWriterEffect;
