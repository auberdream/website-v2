import React, { Component } from "react";
import InlineSVG from "svg-inline-react";

class HomeBackgroundImage extends Component {
  render() {
    return (
      <div className="home-background-image__wrapper">
        <InlineSVG src={this.props.image} />
      </div>
    );
  }
}

export default HomeBackgroundImage;
