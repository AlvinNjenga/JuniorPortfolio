import React, { Component } from 'react';
import HomeButton from './HomeButton';

class HomeText extends Component {
  render() {
    return (
      <div className="home-text">
        <div className="under-text">
          <h1>Hi, I'm <span className="span-text">Alvin</span> N. <span className="span-text">Retallack</span></h1>
          <h1> I'm a junior web developer.</h1>
        </div>
        <HomeButton />
      </div>
    );
  }
}

export default HomeText;
