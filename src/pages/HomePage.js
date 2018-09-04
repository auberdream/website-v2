import React, { Component } from "react";

import AnimatedHeader from "../components/AnimatedHeader";
import HomeBackgroundImage from "../components/HomeBackgroundImage";
import image from "../../static/images/ellie.svg";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <HomeBackgroundImage image={image} />
        <AnimatedHeader heading={this.props.pageData.heading} />
      </div>
    );
  }
}

export default HomePage;
