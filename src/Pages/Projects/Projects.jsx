import React, { Component } from "react";
import ProjectBlock from "./ProjectBlock";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { toppx: "0px" };
    this.someHandler = this.someHandler.bind(this);
  }
  someHandler() {}
  render() {
    return (
      <div
        className="resume-section  p-3 d-flex flex-column transition-item"
        
      >
        <div className="my-auto projects-container">
        <h2 id="skillsh2" class="heading-padd"> </h2>
          <h2 className="m-5 Heading skills mt-3" >Projects</h2>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="row mt-5 ">
          <ProjectBlock
            name={"Brandsmart"}
            className={"first"}
            image={require("../../assets/bm_logo.png")}
            siteurl={"https://www.brandsmartusa.com"}
            background={require("../../assets/electronics.jpg")}
            description={"Electronic retailer chain delivering the best brands at low prices"}
          />
          <ProjectBlock
            name={"DXL"}
            image={"https://www.destinationxl.com/assets/images/dxl-logo.svg"}
            siteurl={"https://www.destinationxl.com"}
            background={require("../../assets/clothes.jpg")}
            description={"Mens apparel for Big and tall with best in class clothing from the best brands"}
          />
           <ProjectBlock
            name={"SOLR XM"}
            siteurl={"http://172.16.10.179:6080/"}
            background={require("../../assets/search.jpg")}
            description={"A Solr based application capable of generating dynamic result pages based on search"}
          />
          <ProjectBlock 
            name={"TWG Companies"}
            image={require("../../assets/logo-pickBoxx.svg")}
            siteurl={"http://twgcompanies.com"}
            background={require("../../assets/business.jpg")}
            description={"A business support firm that offers services like Social Media marketing, Business loans etc"}
          />
          <ProjectBlock 
            name={"TWG Homeremodeling"}
            image={require("../../assets/cropped-TWGHR.png")}
            siteurl={"http://twghomeremodeling.com"}
            background={require("../../assets/remodeling.jpg")}
            description={"A home remodeling firm which provides services like Powerwashing, Gutter Cleaning etc"}
            
          />
          <ProjectBlock 
            name={"Lachlist"}
            image={"http://www.lachlist.com/wp-content/uploads/2016/12/New-LachList-Logo-2-1600x384.png"}
            siteurl={"http://lachlist.com"}
            background={require("../../assets/construction.jpg")}
            description={"An application that helps the construction contactors to learn more about the contractee"}
          />
        </div>
        <br/>
        <h3 className="text-center Heading mx-auto">Some personal stuff</h3>
        <div className="row mt-5">
        <ProjectBlock 
            name={"Pokedex"}
            image={"https://camo.githubusercontent.com/1a4b11888ddf9f2b7a9353d6b69503e634e8704c/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"}
            siteurl={"https://github.com/dhirajsriram/Pokedex-React"}
            content={["A pokedex is a tool which gives all the information such as bio, attributes and also the evolution chain of a pokemon.","Used <span className='bold-text'>Pokéapi v2</span> ,which is a RESTful api to fetch the Pokemon's information","Used <span className='bold-text'>react router for routing and axios</span> to make HTTP calls","Have also developed a similar application in Angular. The motivation was to observe the way the two framework differentiate each other. (<span className='bold-text'>code formatting, partial rendering and two-way binding</span>)"]}
            technologies={["js-square", "react","node", "html5", "css3"]}
            className={"second-line"}
            background={require("../../assets/pokemon.jpg")}
            description={"An application that delivers the catalogued information regarding the various species of Pokémon"}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
