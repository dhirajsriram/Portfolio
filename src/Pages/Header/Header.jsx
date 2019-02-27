import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'
import {ScrollContext} from '../../context/context'
class Header extends Component {
  constructor() {
    super();
    this.state = {
      width:  800,
      height: 182
    }
  }
  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
    render() {
        return (
          <ScrollContext.Consumer>
            {context=>(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <div className="navbar-brand js-scroll-trigger">
        <span className="d-block d-lg-none Heading">Ds</span>
        <span className="d-none d-lg-block">
        <div className="logo">
        <Link to="/About" onClick={context.scrollPos.bind(this,'About')}> Ds</Link>
          </div>
        </span>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/About" className={(this.props.scroll >=0 &&  this.props.scroll <=722)?'active main-links':'main-links'} onClick={context.scrollPos.bind(this,'About')}><i className="fas fa-user"></i>{this.state.width < 768?" Home":null}</Link>
          </li>
          <li className="nav-item">
          <Link to="/Me" className={(this.props.scroll > 723 &&  this.props.scroll <=1999)?'active main-links':'main-links'} onClick={context.scrollPos.bind(this,'Me')}><i className="far fa-address-card"></i>{this.state.width < 768?" Me":null}</Link>
          </li>
          <li className="nav-item">
          <Link to="/Experience" className={(this.props.scroll >= 2000 &&  this.props.scroll <=3019)?'active main-links':'main-links'} onClick={context.scrollPos.bind(this,'Experience')}><i className="fas fa-briefcase"></i>{this.state.width < 768?" Experience":null}</Link>
          </li>
          <li className="nav-item">
          <Link to="/Projects" className={(this.props.scroll >=3020 &&  this.props.scroll <=3999)?'active main-links':'main-links'} onClick={context.scrollPos.bind(this,'Projects')}><i className="fas fa-file-code"></i>{this.state.width < 768?" Portfolio":null}</Link>
          </li>
          <li className="nav-item">
          <Link to="/Awards" className={(this.props.scroll >=4000 &&  this.props.scroll <=4699)?'active main-links':'main-links'} onClick={context.scrollPos.bind(this,'Awards')}><i className="fas fa-trophy"></i>{this.state.width < 768?" Awards":null}</Link>
          </li>
          <li className="nav-item">
          <Link to="/Contact" className={(this.props.scroll >=4700)?'active main-links':'main-links'} onClick={context.scrollPos.bind(this,'Contact')}><i className="fas fa-phone"></i>{this.state.width < 768?" Contact":null}</Link>
          </li>
        </ul>
      </div>
    </nav> )}</ScrollContext.Consumer>
        );
    }
}

export default withRouter(Header);