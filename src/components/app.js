import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from './logo';

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        
        <Router>
          <div>
            <NavigationContainer />
            <div>
          <Logo/>
        </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
            </Switch>
          </div>
        </Router>

        <PortfolioContainer />
      </div>
    );
  }
}
