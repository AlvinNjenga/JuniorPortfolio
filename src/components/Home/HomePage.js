import React, { Component } from 'react';
import Particles from 'react-particles-js';
import params from './particles-config';
import HomeText from './HomeText';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Particles params={params} className="particles" />
        <HomeText />
      </div>
    );
  }
}

export default HomePage;
