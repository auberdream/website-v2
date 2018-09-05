import React, { Component } from "react";
import { TimelineLite } from "gsap/all";

class AnimatedHeader extends Component {
  componentDidMount() {
    const timeline0 = new TimelineLite();
    timeline0.from(this.refs.container0, 2, { width: 0 });
    timeline0.from(this.refs.word0, 2.5, { opacity: 0, top: "100px" });

    const timeline1 = new TimelineLite();
    timeline1.from(this.refs.word1, 2.5, { opacity: 0, bottom: "100px" }, 2.4);
  }

  splitChars() {
    const { heading } = this.props;
    const split = heading.split(" ").map((word, index) => {
      return (
        <div
          key={index}
          ref={`container${index}`}
          className="animated-header__text-wrapper"
        >
          <h1 ref={`word${index}`} className="animated-header__text">
            {word.toUpperCase()}
          </h1>
        </div>
      );
    });
    return split;
  }

  render() {
    return <div className="animated-header">{this.splitChars()}</div>;
  }
}

export default AnimatedHeader;
