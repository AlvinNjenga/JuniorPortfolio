import React, { Component } from 'react';
import '../../css/About.css';
import Zoom from 'react-reveal/Zoom';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg title-wrapper">
              <Zoom>
                <h1>ABOUT</h1>
              </Zoom>
              <div className="title-underline" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <i className="fa fa-rebel" />
            </div>
            <div className="col-sm">
              <p>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                  "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                  What is Lorem Ipsum?
              </p>
            </div>
            <div className="col-sm">
              <p>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                  "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                  What is Lorem Ipsum?
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
