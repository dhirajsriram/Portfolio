import React, { Component } from 'react';
import './ProjectBlock.scss';

class ProjectBlock extends Component {

    constructor(props,context) {
        super(props,context);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          data: "",
          hover:false
        };

        
    }
    handleMouseHover() {
      this.setState({
        hover:!this.state.hover
      });
    }
  
    render() {
         
        return (
            <div className={this.props.className === 'second-line'?"col-md-12 col-12 col-sm-12 col-lg-12 col-xl-4 projectBlock second-line":this.props.className === 'first'?"col-md-12 col-12 col-sm-12 col-lg-12 col-xl-4 projectBlock first-proj":"col-md-12 col-12 col-sm-12 col-lg-12 col-xl-4 projectBlock"}>
            <div className="projects" style = {{ backgroundImage: 'url(' + this.props.background + ')',backgroundPosition:"center"}} onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}>
              {!this.state.hover ? <div className="image-project">
                <img
                  src={this.props.name!=="SOLR XM"?this.props.image:require("../../assets/Solr-logo.png")}
                  alt="Bm-logo"
                  height={this.props.name !=="React docs - Tamil"?40:60}
                  className="img-responsive"
                />
              </div>:<div className="project-backside">
              <div className="project-desc">{
                this.props.description
              }</div>
              <div className="link-button">
              <a href={this.props.siteurl}>View Website</a>
              </div>
              </div>
            }
            </div>
          </div>
        );
    }
}

export default ProjectBlock;