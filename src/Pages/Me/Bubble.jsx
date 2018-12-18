import React, { Component } from 'react';

class Bubble extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: ""
        };
      }
    render() {
        return (
            <div className="col-sm-2 col-12 skill text-center"><div className="circle text-center"><i className={this.props.itemClass}></i></div><h3 className="subHeading text-white bubble-header">{this.props.itemName}</h3><p>{this.props.information}</p></div>
        );
    }
}

export default Bubble;