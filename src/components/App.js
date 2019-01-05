import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import '../css/App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from './Navbar/Navbar';
import HomePage from './Home/HomePage';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="app" id="App">
        <HomePage />
        <Navbar />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
