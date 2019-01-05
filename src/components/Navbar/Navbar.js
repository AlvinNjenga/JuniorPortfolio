import React, { Component } from 'react';
import '../../css/Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const el = document.querySelector('nav');
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    let { scroll, top } = this.state;
    scroll > top ? document.body.style.paddingTop = 0
      : document.body.style.paddingTop = 0;
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  render() {
    return (
      <nav className="sticky navbar">
        <ul>
          <a href="/"><li>HOME</li></a>
          <a href="/"><li>ABOUT</li></a>
          <a href="/"><li>WORK</li></a>
          <a href="/"><li>CONTACT</li></a>
          {/*<a href="/"><li>MISC</li></a>*/}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
