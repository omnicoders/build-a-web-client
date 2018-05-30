import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';

class Router extends Component {
  render() {
    const landingPage = () => <LandingPage {...this.props}/>;
    const aboutPage = () => <AboutPage {...this.props}/>;
    return ( 
      <main>
        <Switch>
          <Route exact path='/' component={landingPage}/>
          <Route exact path='/about' component={aboutPage}/>
        </Switch>
      </main>
    );
  }
}

export default Router;
