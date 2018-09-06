import React, { Component } from "react";
import { TimelineLite } from "gsap/all";

import AnimatedSVGHeader from "../components/AnimatedSVGHeader";
import AboutText from "../../static/images/about.svg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div ref="aboutHeaderWrapper" className="about__header-wrapper">
          <AnimatedSVGHeader
            transitionState={this.props.transitionState}
            image={AboutText}
          />
        </div>
      </div>
    );
  }
}

export default About;
