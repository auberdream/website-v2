import React, { Component } from "react";

class AnimatedHeader extends Component {
  splitChars() {
    const { heading } = this.props;
    const split = heading.split(" ").map(word => {
      return <h1 class="animated-header__text">{word.toUpperCase()}</h1>;
    });
    return split;
  }

  render() {
    return <div className="animated-header">{this.splitChars()}</div>;
  }
}

export default AnimatedHeader;
