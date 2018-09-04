import React, { Component } from "react";

import AnimatedHeader from "../components/AnimatedHeader";
import Button from "../components/Button";
import HomeBackgroundImage from "../components/HomeBackgroundImage";
import image from "../../static/images/ellie.svg";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <HomeBackgroundImage image={image} />
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
