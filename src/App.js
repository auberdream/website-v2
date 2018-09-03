import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./Home";

class App extends Component {
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
      <div className="App">
        {console.log(this.state.siteData)}
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
