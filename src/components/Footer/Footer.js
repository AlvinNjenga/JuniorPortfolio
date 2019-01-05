import React, { Component } from 'react';
import '../../css/Contact.css';

class Footer extends Component {
    render() {
        return(
            <div>
              <div className="row footer">
                <div className="col footer-col">
                  <div className="social-icon"><i className="fa fa-2x fa-github" /></div>
                  <div className="social-icon"><i className="fa fa-2x fa-linkedin" /></div>
                </div>
              </div>
              
              <div className="row">
                <div className="col footer-text">
                  <p>ALVIN NJENGA <span className="copyright">&#169; 2019</span></p>
                </div>
              </div>
            </div>
        )
    }
}

export default Footer;