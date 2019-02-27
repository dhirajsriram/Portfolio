import React, { Component } from "react";
import { Link } from "react-router-dom";
import {ScrollContext} from '../../context/context'
class About extends Component {
  componentDidMount() {
    var ml4 = {};
    ml4.opacityIn = [0, 1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500;

    window.anime
      .timeline({ loop: true })
      .add({
        targets: ".ml4 .letters-1",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: ".ml4 .letters-1",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      })
      .add({
        targets: ".ml4 .letters-3",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      })
      .add({
        targets: ".ml4 .letters-3",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      })
      .add({
        targets: ".ml4",
        opacity: 0,
        duration: 500,
        delay: 500
      });
  }
  render() {
    return (
<ScrollContext.Consumer>
  {
    context =>(<div className="resume-section about p-3 d-flex d-column transition-item" id="about">
    <video autoPlay muted loop id="myVideo">
      <source src={require("../../assets/LineB&W.mp4")} />
      Your browser does not support HTML5 video.
    </video>
    <div className="my-auto content">
      <h1 className="Heading">
        <span className="letters">Dhiraj Sriram</span>
      </h1>
      <div className="ml4 subheading text-white">
        <span className="letters letters-1">UI/UX Developer</span>
        <span className="letters letters-2">Front end developer</span>
      </div>
      <br />
      <br/>
      <br/>
      <br/>
      <p className="lead mb-5 ext-truncat text-center">
       UI Designer & Developer based in Dallas, Texas.<br/>Highly experienced in designing & developing User Interfaces in <i className="fab fa-angular"></i> & <i className="fab fa-react"></i>.
      </p>
    
    </div>
    <Link to="/Projects" onClick={context.scrollPos.bind(this,'Projects')} className={this.props.scroll && this.props.scroll !== 0?"fadeMe none":"fadeMe"}><button type="button" className="portfolio links hvr-bounce-in">Portfolio <i className="fas fa-angle-double-right"></i></button></Link> 
    <Link to="/Contact" onClick={context.scrollPos.bind(this,'Contact')} className={this.props.scroll && this.props.scroll !== 0?"fadeMe none":"fadeMe"}><button type="button" className="contact links hvr-bounce-in">Contact me <br/><i className="fas fa-angle-double-down"></i></button></Link>
  </div>)
  }
</ScrollContext.Consumer>
    );
  }
  
}
export default About;
