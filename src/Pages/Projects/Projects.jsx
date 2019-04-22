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
        <h2 id="skillsh2" className="heading-padd"> </h2>
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
            class={"first"}
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
            image={require("../../assets/lachlist.png")}
            siteurl={"http://lachlist.com"}
            background={require("../../assets/construction.jpg")}
            description={"An application that helps the construction contactors to learn more about the contractee"}
          />
        </div>
        <br/>
        <h3 className="text-center Heading mx-auto">Some personal stuff</h3>
        <div className="row mt-5">
        <ProjectBlock 
            name={"react-accessible-searchbar"}
            image={"http://www.pngmart.com/files/5/Snow-PNG-Transparent-Image.png"}
            siteurl={"https://www.npmjs.com/package/react-accessible-searchbar"}
            technologies={["react"]}
            class={"second-line"}
            background={"https://callstack.github.io/react-native-paper/screenshots/searchbar.png"}
            description={"A prebuilt react searchbar with Accessibility ,Autosuggest and Callbacks for search submission and value change"}
          />
          <ProjectBlock 
            name={"npm-tabs"}
            image={"https://raw.githubusercontent.com/samueleaton/design/master/npm-scripts-black.png"}
            siteurl={"https://github.com/dhirajsriram/Npm-tabs"}
            technologies={["terminal"]}
            class={"second-line"}
            background={"https://images.reference.com/reference-production-images/question/aq/tab-key_b59603b8e66566ed.jpg?width=760&height=411&fit=crop"}
            description={"A bash script that provides autocomplete functionality to your command-line for npm scripts"}
          />
        <ProjectBlock 
            name={"Pokedex"}
            image={"https://camo.githubusercontent.com/1a4b11888ddf9f2b7a9353d6b69503e634e8704c/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"}
            siteurl={"https://github.com/dhirajsriram/Pokedex-React"}
            technologies={["js-square", "react","node", "html5", "css3"]}
            class={"second-line"}
            background={require("../../assets/pokemon.jpg")}
            description={"An application that delivers the catalogued information regarding the various species of Pokémon"}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
