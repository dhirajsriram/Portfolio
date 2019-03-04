import React, { Component } from "react";
import Bubble from "./Bubble";
import ProgressBar from './ProgressBar'
class Me extends Component {
  render() {
    return (
      <div
        className="resume-section  p-3 d-flex flex-column transition-item"
        id="me"
      >
      <h2 id="meh2" className="heading-padd"> </h2>
        <h1 className="subheading text-white text-center Hi" >
          Hi, Im Dhiraj. Nice to meet you
        </h1>
        <p className="about-me text-center">
          "The passion for arts which I had in my childhood aligned perfectly
          when I chose the path of an UI developer. The way that I have
          transilated my passion into work is clearly evident from the projects
          that I have done in the past. I have had the pleasure to have
          collaborated with some of the coolest companies which were kind enough
          to encourage my ideas and help me turn it into real life applications.
          What would be the next pit stop in my life of neverending experiences
          and growth, I wonder!!"
        </p>
        <h1 className="subheading text-white text-center Hi">
          What I'm responsible for
        </h1>
        <div className="row">
          <Bubble
            itemName={"Responsive"}
            itemClass={"fas fa-mobile-alt"}
            information={"Responsive first, thats my policy"}
          />
          <Bubble
            itemName={"Accessibility"}
            itemClass={"fab fa-accessible-icon"}
            information={"The websites I develop adhere to A11y standards"}
          />
          <Bubble
            itemName={"SPA"}
            itemClass={"fas fa-window-maximize"}
            information={
              "Experienced in delivering quality, Single Page Applications"
            }
          />
          <Bubble
            itemName={"PWA"}
            itemClass={"fas fa-mobile-alt"}
            information={"Progressive Web Apps, Thats the future"}
          />
          <Bubble
            itemName={"Fast"}
            itemClass={"fas fa-bolt"}
            information={"Commited to deliver Efficient and reliable code"}
          />
          <Bubble
            itemName={"Resuable"}
            itemClass={"fas fa-recycle"}
            information={"My code is as reusable as it is Efficient"}
          />
        </div>

        <div className="row mt-5">
          <div className="col-sm-6 text-center col-12">
            <div className="mt-5 profile-img">
              <img
                className="img-responsive"
                alt="dhiraj-logo"
                src={require("../../assets/18700231_1523853040979325_4856863242513125567_n.jpg")}
              />
              <br />
              <div className="who-is">
                <h3 className="subHeading text-white bubble-header">
                  Who is Dhiraj?
                </h3>
                <p className="About-me">
                    I work as a UI developer for <a className="bold-text" href="http://taistech.com/"> TAIStech, LLC</a> in Dallas,TX. I am a guy that has a serious passion for designing user-friendly, efficient, reliable and intutive User-Interfaces. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-12 p-5">
          <ProgressBar percent={"90%"} name={"Angular"}/>
          <ProgressBar percent={"90%"} name={"React"}/>
          <ProgressBar percent={"90%"} name={"HTML5"}/>
          <ProgressBar percent={"90%"} name={"CSS3"}/>
          <ProgressBar percent={"80%"} name={"JS/TS"}/>
          <ProgressBar percent={"80%"} name={"SASS/LESS"}/>
          <ProgressBar percent={"80%"} name={"Node"}/>
          <ProgressBar percent={"60%"} name={"UI Design"}/>
          <ProgressBar percent={"60%"} name={"Photoshop"}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Me;
