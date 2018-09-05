import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import DrawSVGPlugin from "../plugins/DrawSVGPlugin";
import InlineSVG from "svg-inline-react";

class HomeBackgroundImage extends Component {
  componentDidMount() {
    const timeline = new TimelineLite();
    timeline.from(".cls-1", 10, { drawSVG: 0 });
  }

  render() {
    return (
      <div className="home-background-image__wrapper">
        <InlineSVG src={this.props.image0} />
        <InlineSVG src={this.props.image1} />
      </div>
    );
  }
}

export default HomeBackgroundImage;
