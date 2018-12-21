import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import '../css/App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar/Navbar';
import HomePage from './Home/HomePage';
import About from './About/About';
import Projects from './Projects/Projects';

library.add(faBookOpen);

class App extends Component {
  render() {
    return (
      <div className="app" id="App">
        <HomePage />
        <Navbar />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
