import React, { Component } from "react";
import { TimelineLite } from "gsap/all";

import AnimatedHeader from "../components/AnimatedHeader";
import Button from "../components/Button";
import HomeBackgroundImage from "../components/HomeBackgroundImage";
import ellie from "../../static/images/ellie.svg";
import ellieMirror from "../../static/images/ellie-mirror.svg";

class HomePage extends Component {
  componentDidMount() {
    const timeline = new TimelineLite();

    timeline.staggerFrom(".button__inner-wrapper", 3, { opacity: 0 }, 0.5, 5);
  }

  render() {
    return (
      <div className="home-page">
        <HomeBackgroundImage image0={ellie} image1={ellieMirror} />
        <div className="home-page__right-wrapper">
          <AnimatedHeader heading={this.props.pageData.heading} />
          <div className="button__outer-wrapper">
            <div className="button__inner-wrapper">
              <Button
                location="/about"
                text="about"
                classname="button--solid"
              />
              <Button
                location="/projects"
                text="projects"
                classname="button--solid"
              />
            </div>
            <div className="button__inner-wrapper">
              <Button location="/contact" text="contact" classname="button" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
