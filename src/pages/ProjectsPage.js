import React, { Component } from "react";
import { TimelineLite } from "gsap/all";

class ProjectsPage extends Component {
  componentDidMount() {
    const projectsTimeline = new TimelineLite();
    const loadingTimeline = new TimelineLite({
      onComplete: () => {
        loadingTimeline.restart();
      }
    });

    projectsTimeline.from(".coming-soon__text", 1.5, { opacity: 0 }, 3);
    loadingTimeline.delay(3);
    loadingTimeline
      .staggerTo(".dot", 1, { opacity: 1 }, 1, "+=0")
      .staggerTo(".dot", 1, { opacity: 0 }, 1, "+=0");
  }

  componentDidUpdate() {
    if (this.props.transitionState === "exiting") {
      this.exitTransition();
    }
  }

  exitTransition() {
    console.log("here");
    const exitTimeline = new TimelineLite();

    exitTimeline.to(".coming-soon__text, .dot", 1, { opacity: 0 });
  }

  render() {
    return (
      <div className="projects">
        <div className="coming-soon__wrapper">
          <div className="coming-soon__text">coming soon</div>
          <div className="coming-soon__loader-wrapper">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
