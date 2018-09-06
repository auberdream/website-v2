import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import InlineSVG from "svg-inline-react";

import ellieStatic from "../../static/images/ellie-static.svg";

class ContactPage extends Component {
  componentDidMount() {
    const contactTimeline = new TimelineLite();

    contactTimeline.to(
      "#path-1__static, #path-5__static, #path-6__static, #path-7__static",
      3,
      {
        fill: "red"
      },
      2.5
    );
  }

  componentDidUpdate() {
    if (this.props.transitionState === "exiting") {
      this.exitTransition();
    }
  }

  exitTransition() {
    const exitTimeline = new TimelineLite();

    exitTimeline.to(
      "#path-1__static, #path-5__static, #path-6__static, #path-7__static",
      2,
      {
        fill: "white"
      },
      0.5
    );
  }

  render() {
    return (
      <div className="contact">
        <div className="contact__svg-container">
          <InlineSVG src={ellieStatic} />
        </div>
      </div>
    );
  }
}

export default ContactPage;
