import React, { Component } from "react";
import { Link } from "react-router-dom";

class Button extends Component {
  render() {
    return (
      <Link className={this.props.classname} to={this.props.location}>
        {this.props.text}
      </Link>
    );
  }
}

export default Button;
