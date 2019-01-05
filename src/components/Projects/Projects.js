import React, { Component } from 'react';
import '../../css/Projects.css';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <div className="container">
          <div className="row">
            <div className="col-lg title-wrapper">
              <Fade right distance={'15%'} duration={500}>
                <h1>PROJECTS</h1>
              </Fade>
              <Fade right big distance={'50%'} delay={500}>
                <div className="title-underline" />
              </Fade>
            </div>
          </div> {/* End of first row */}
          {/* First project row */}
          <div className="row">

            <Bounce bottom delay={300}>
              <div className="col project-wrapper wrapper-1">
                <div className="hover-wrapper">
                  <p className="project-title">Project Title</p>
                  <p className="project-text">Project Text</p>
                  <div className="project-button">Learn More!</div>
                </div>
              </div>
            </Bounce>

            <Bounce bottom delay={350}>
              <div className="col project-wrapper wrapper-2">
                <div className="hover-wrapper">
                  <p className="project-title">Project Title</p>
                  <p className="project-text">Project Text</p>
                  <div className="project-button">Learn More!</div>
                </div>
              </div>
            </Bounce>

            <Bounce bottom delay={400}>
              <div className="col project-wrapper wrapper-3">
                <div className="hover-wrapper">
                  <p className="project-title">Project Title</p>
                  <p className="project-text">Project Text</p>
                  <div className="project-button">Learn More!</div>
                </div>
              </div>
            </Bounce>

          </div>
          {/* End of first project row */}

          {/*Second project row */}
          <div className="row">
            
            <Bounce bottom delay={400}>
              <div className="col project-wrapper wrapper-4">
                <div className="hover-wrapper">
                  <p className="project-title">Project Title</p>
                  <p className="project-text">Project Text</p>
                  <div className="project-button">Learn More!</div>
                </div>
              </div>
            </Bounce>

            <Bounce bottom delay={350}>
              <div className="col project-wrapper wrapper-5">
                <div className="hover-wrapper">
                  <p className="project-title">Project Title</p>
                  <p className="project-text">Project Text</p>
                  <div className="project-button">Learn More!</div>
                </div>
              </div>
            </Bounce>

            <Bounce bottom delay={300}>
              <div className="col project-wrapper wrapper-6">
                <div className="hover-wrapper">
                  <p className="project-title">Project Title</p>
                  <p className="project-text">Project Text</p>
                  <div className="project-button">Learn More!</div>
                </div>
              </div>
            </Bounce>
          </div>
          {/*End of second project row */}

        </div>
      </section>
    );
  }
}

export default Projects;
