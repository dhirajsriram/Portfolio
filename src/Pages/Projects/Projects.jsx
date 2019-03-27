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
        class="resume-section  p-3 d-flex flex-column transition-item"
        
      >
        <div class="my-auto projects-container">
        <h2 id="skillsh2" class="heading-padd"> </h2>
          <h2 class="m-5 Heading skills mt-3" >Projects</h2>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div class="row mt-5 ">
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
            image={"http://www.lachlist.com/wp-content/uploads/2016/12/New-LachList-Logo-2-1600x384.png"}
            siteurl={"http://lachlist.com"}
            background={require("../../assets/construction.jpg")}
            description={"An application that helps the construction contactors to learn more about the contractee"}
          />
        </div>
        <br/>
        <h3 class="text-center Heading mx-auto">Some personal stuff</h3>
        <div class="row mt-5">
        <ProjectBlock 
            name={"Pixelate-js"}
            image={"https://d2vqpl3tx84ay5.cloudfront.net/500x/tumblr_lsus01g1ik1qies3uo1_400.png"}
            siteurl={"https://www.npmjs.com/package/pixelate-js"}
            technologies={["js-square", "node"]}
            class={"second-line"}
            background={require("../../assets/pixelateJs.png")}
            description={"A customizable wallpaper generator for JS enthusiasts 💗"}
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
