import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "../pages/Home";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteData: null
    };
  }

  componentDidMount() {
    axios
      .get("site/")
      .then(response => {
        this.setState({ siteData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="router">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Router;
