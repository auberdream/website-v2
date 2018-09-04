import React, { Component } from "react";
import { drawSVG, TimelineLite } from "gsap/all";
import InlineSVG from "svg-inline-react";

class HomeBackgroundImage extends Component {
  componentDidMount() {
    TweenLite.to("#path-1", 1, { drawSVG: "20% 80%" });
    TweenLite.to("#path-2", 1, { drawSVG: "20% 80%" });
    TweenLite.to("#path-3", 1, { drawSVG: "20% 80%" });
    TweenLite.to("#path-4", 1, { drawSVG: "20% 80%" });
    TweenLite.to("#path-5", 1, { drawSVG: "20% 80%" });
    TweenLite.to("#path-6", 1, { drawSVG: "20% 80%" });
    TweenLite.to("#path-7", 1, { drawSVG: "20% 80%" });
  }

  render() {
    return (
      <div className="home-background-image__wrapper">
        <InlineSVG src={this.props.image} />
      </div>
    );
  }
}

export default HomeBackgroundImage;
