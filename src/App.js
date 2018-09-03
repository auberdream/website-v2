import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteData: null
    };
  }

  componentDidMount() {
    axios
      .get("/api/site/")
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
        <p>{this.state.siteData}</p>
      </div>
    );
  }
}

export default App;
