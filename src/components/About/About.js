import React, { Component } from 'react';
import '../../css/About.css';
import Skills from './Skills';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import businessman from '../../img/businessman.PNG';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg title-wrapper">
              <Fade left distance={'15%'} duration={1200}>
                <h1>ABOUT</h1>
              </Fade>
              <Fade left distance={'50%'} delay={1000}>
                <div className="title-underline" />
              </Fade>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <Flip left>
                <i className="fa fa-5x fa-dashboard" />
              </Flip>
              <Fade delay={600}>
                <div>
                  <p className="icon-tag">FAST</p>
                  <p className="icon-text">This is a useless statement meant to add some kind of  text to be placed under the icon.</p>
                </div>
              </Fade>
            </div>
            <div className="col-sm">
              <Flip left delay={300}>
                <i className="fa fa-5x fa-lightbulb-o" />
              </Flip>
              <Fade delay={800}>
                <div>
                  <p className="icon-tag">CREATIVE</p>
                  <p className="icon-text">This is a useless statement meant to add some kind of  text to be placed under the icon.</p>
                </div>
              </Fade>
            </div>
            <div className="col-sm">
              <Flip left delay={600}>
                <i className="fa fa-5x fa-laptop" />
              </Flip>
              <Fade delay={1000}>
                <div>
                  <p className="icon-tag">RESPONSIVE</p>
                  <p className="icon-text">This is a useless statement meant to add some kind of  text to be placed under the icon.</p>
                </div>
              </Fade>
            </div>
          </div> {/* End of second row */}

          <div className="row final-about">
            <div className="col image-section">
              <Fade left delay={500}>
                <img src={businessman} style={{width: '350px', height: '350px',  borderRadius: '50%'}}/>
              </Fade>
              <Fade delay={600}>
                <p className="icon-tag">WHO AM I?</p>
                <p className="icon-text">
                  I'm a junior front-end developer based in London. I have a strong interest in UI/UX and
                  creating a smooth, visually pleasing user experience.<br></br>
                  <span style={{fontSize:'0.9rem', color: 'rgb(62, 147, 175)'}}>Disclaimer: I don't always code in a suit.</span>
                </p>
              </Fade>
            </div>

            <Skills />

          </div>
        </div>
      </section>
    );
  }
}

export default About;
