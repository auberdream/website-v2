import React, { Component } from "react";

class AnimatedHeader extends Component {
  render() {
    return (
      <div className="animated-header">
        <h1>{this.props.heading}</h1>
      </div>
    );
  }
}

export default AnimatedHeader;
