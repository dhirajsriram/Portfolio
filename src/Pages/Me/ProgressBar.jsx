import React, { Component } from "react";
import './ProgressBar.scss';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: ""
        };
      }
  render() {
    return (
      <div className="row"> 
          <div className="Name col-sm-3 text-center">{this.props.name}</div> 
      <div className="progress progressBar col-sm-9">
        
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: this.props.percent }}
        />
      </div>
      </div>
    );
  }
}

export default ProgressBar;
