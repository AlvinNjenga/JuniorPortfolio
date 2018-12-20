import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import '../css/App.css';
import Navbar from './Navbar/Navbar';
import HomePage from './Home/HomePage';
import About from './About/About';

class App extends Component {
  render() {
    return (
      <div className="app" id="App">
        <HomePage />
        <Navbar />
        <About />
      </div>
    );
  }
}

export default App;
