import React, { Component } from "react";
import Work from "./Work"

class Experience extends Component {
  
  render() {
    return (
      <div
        className="resume-section  p-3 d-flex flex-column transition-item"
        id="experience"
      >
        <div className="my-auto">
          <h2 className="mb-5 Heading">Experience</h2>
        </div>
        <Work name={"TAISTech"} image={require("../../assets/taistech-logo-white.png")} devrole="UI developer" duties={["Involved in designing HTML's and providing functionality to the web pages based on the requirements","Responsible for building applications optimized for <span className='bold-text'>speed,accessibility and responsiveness</span>","Ensure the technical feasibility of UI/UX designs","  Collaborate with other team members and ensuring ceaseless development by helping them out in case of any technical blockades.","Responsible for ensuring that the developed code adhere to the development standards with proper implementation of reusable libraries wherever necessary.","Ensuring that the code is <span className='bold-text'reusable and scalable</span> for any future development."]} duration={"Sep 2017 - Present | Addison, Texas"}/>
        <Work name={"PICKBoxx"} image={require("../../assets/logo-pickBoxx.svg")} devrole="Full Stack Developer" duties={["Designed and Translated wireframes/PSDs into launch-ready, valid HTML/CSS of websites twghomeremodeling.com, twgcompanies.com, pickboxx.com","Entirely designend and developed the website Lachlist.com.","Lead the design and development of Inutive apllications which satisfy <span className='bold-text'>ease-of-use and promotes user interaction</span>","Work with QA to ensure that the <span className='bold-text'>applications meet desired objectives</span>","Ensured cross-browser and mobile compatibility(Responsive design). "]} duration={"Jun 2016 - Sep 2017 | Newark, New jersey"}/>
      </div>
    );
  }
}

export default Experience;
