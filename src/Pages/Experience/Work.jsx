import React, { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  render() {
    if (this.props.duties) {
      var duties = this.props.duties.map(function(item, i) {
        return <li key={i} dangerouslySetInnerHTML={{__html: item}}></li>;
      });
    }
    return (
      <div className="jumbotron exp mx-auto">
        <div className="exp-header">
          <div className="row">
            <div className="col-6">
              <img
                ref="image"
                alt={this.props.name}
                src={this.props.image}
                height="50"
              />
            </div>
            <div className="col-6 float-right">
              <p className="float-right">{this.props.devrole}</p>
            </div>
          </div>
          <br />
        </div>
        <div className="exp-content">
          <ul>{duties}</ul>
        </div>
        <div className="exp-footer">
          <div className="row">
            <div className="col-sm-6 col-6">
              <p className="duration" dangerouslySetInnerHTML={{__html: this.props.duration}}></p>
            </div>
            <div className="col-sm-6 col-6">
              <p className="float-right">
                Technologies : 
                {
                  this.props.technologies && this.props.technologies.map(function(technology,i){
                    return(<i className={technology +" technologies"} key={i}></i>)
                  })
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
