import axios from "axios";
import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";

import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Cursor from "../components/Cursor";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";

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
    const { location } = this.props;
    const dataLoaded = this.state.siteData !== null;

    return (
      <div className="router">
        <Cursor inertia={8} position="main" />
        <Cursor inertia={12} position="sub" />
        {dataLoaded && (
          <TransitionGroup className="transition-wrapper">
            <Transition
              key={location.pathname}
              timeout={3000}
              classNames="transition"
            >
              {transitionState => {
                return (
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={() => (
                        <HomePage
                          transitionState={transitionState}
                          pageData={this.state.siteData.home_page}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/about"
                      render={() => (
                        <AboutPage transitionState={transitionState} />
                      )}
                    />
                    <Route
                      path="/projects"
                      render={() => (
                        <ProjectsPage transitionState={transitionState} />
                      )}
                    />
                    <Route
                      path="/contact"
                      render={() => (
                        <ContactPage transitionState={transitionState} />
                      )}
                    />
                  </Switch>
                );
              }}
            </Transition>
          </TransitionGroup>
        )}
      </div>
    );
  }
}

export default withRouter(Router);
