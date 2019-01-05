import React, { Component } from 'react';
import '../../css/Contact.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Contact extends Component {
    render() {
        return(
            <section id="contact">
              <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
                <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5f5" stroke="#f5f5f5f5"></path>
              </svg> 

              <div className="container">
                <div className="row">
                  <div className="col">
                    <Fade right>
                      <h1 className="contact-title">CONTACT</h1>
                    </Fade>
                    <Fade left>
                      <div className="title-underline white" />
                    </Fade>                 
                  </div>
                </div>

                <Zoom delay={200}>
                  <div className="row">
                    <div className="col">
                      <p className="contact-text">If you need me, you know how to find me.<br></br>...it's below.</p>
                    </div>
                  </div>
                </Zoom>

                <Zoom delay={500}>
                  <div className="row">
                    <div className="col">
                      <form class="contact-form" id="contact-form">
                        <input placeholder="Name" type="text" name="name" required="" />
                        <input placeholder="Email" type="email" name="email" required="" />
                        <textarea placeholder="Your Message" type="text" name="message"></textarea>
                        <input class="button" type="submit" id="submit" value="SUBMIT" />
                      </form>
                    </div>
                  </div>
                </Zoom>
                
              </div>
            </section>
        )
    }
}

export default Contact;