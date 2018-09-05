import React, { Component } from "react";

class Cursor extends Component {
  constructor(props) {
    super(props);
    this.mouseX = 0;
    this.mouseY = 0;
    this.elementY = null;
    this.elementWidth = null;
    this.elementHeight = null;
    this.raf = null;
    this.xCurrent = 0;
    this.yCurrent = 0;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.loop = this.loop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
    this.raf = requestAnimationFrame(this.loop);
    setTimeout(() => {
      this.handleResize();
    }, 100);
  }

  handleMouseMove(event) {
    this.mouseX = event.x;
    this.mouseY = event.y;
  }

  loop() {
    // Find out the center of the element
    const centerX = window.innerWidth * 0.5;
    const centerY = window.innerHeight * 0.5;

    // Work out the distance from the element to the mouse
    const dx = this.mouseX - centerX;
    const dy = this.mouseY + window.scrollY - centerY;
    const hyp = Math.sqrt(dx * dx + dy * dy);

    // Update the current values using intertia formula
    this.xCurrent += (dx - this.xCurrent) / 8;
    this.yCurrent += (dy - this.yCurrent) / 8;

    // Apply the style
    const style = `translate3D(${this.xCurrent}px, ${this.yCurrent}px, 0)`;
    this.refs.cursor.style.transform = style;

    requestAnimationFrame(this.loop);
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  render() {
    return <div ref="cursor" className="cursor" />;
  }
}

export default Cursor;
