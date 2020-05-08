import React, { Component } from "react";
import "./Bubble.scss";

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  render() {
    return (
      <div className="col-md-12 col-12 col-sm-12 col-lg-12 col-xl-2 skill text-center">
        <div className="circle text-center">
          <i className={this.props.itemClass}></i>
        </div>
        <h3 className="subHeading text-white bubble-header">
          {this.props.itemName}
        </h3>
        <p>{this.props.information}</p>
      </div>
    );
  }
}

export default Bubble;
