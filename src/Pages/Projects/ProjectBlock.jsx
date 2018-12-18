import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProjectBlock extends Component {

    constructor(props,context) {
        super(props,context);
        this.state = {
          data: ""
        };

        
    }
    render() {
        if (this.props.content) {
            var content = this.props.content.map(function(item, i) {
              return <li className="content-text" key={i} dangerouslySetInnerHTML={{__html: item}}></li>;
            });
          }
          if (this.props.technologies) {
            var technologies = this.props.technologies.map(function(item, j) {
              return <span key={j}><i key={j} className={"fab fa-" + item}></i> {'\u00A0'}</span>;
            });
          }
         
        return (
            <div className={this.props.className === 'second-line'?"col-sm-4 projectBlock second-line":this.props.className === 'first'?"col-sm-4 projectBlock first-proj":"col-sm-4 projectBlock"}>
            <div className="projects">
              <div className="image-project">
                <img
                  src={this.props.image}
                  alt="Bm-logo"
                  height="40"
                  className="img-responsive"
                />
                <div className="row proj-opt">
                  <div
                    className="text-center col-sm-6 button-outline"
                
                  >
                  <a href={this.props.siteurl} className="content-text">
                    <div className="content">
                      <i className="far fa-window-maximize" />
                      <br />
                      View Site
                    </div>
                    </a>
                  </div>
                  <div className="text-center col-sm-6 button-outline">
                    <Link to="/Contact" className="content-text">
                      <div className="content d-none d-sm-block">
                        <i className="fas fa-phone" />
                        <br />
                        Contact me
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="project-text">
                <br />
               
                <div>
                  <ul className="proj-accomplishment">
                    {content}
                  </ul>
                </div>
                <div className="technologies">
                  {technologies}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ProjectBlock;