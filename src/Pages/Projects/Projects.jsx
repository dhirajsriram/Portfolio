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
        id="skills"
      >
        <div className="my-auto">
          <h2 className="m-5 Heading">Projects</h2>
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
            content={[
              "<span className='bold-text'>Improved the first byte response time</span> of the website drastically. Reduced the First byte time from 3.5s to 600ms (Tweaks to ssr).",
              "Improved the security of the website. Enabled <span className='bold-text'>JESSSIONID</span> as a parameter for all HTTP service calls.",
              "Successfully replaced reviews on the website from <span className='bold-text'>XML feed to API</span> (Power Reviews). Which in-turn improved the time taken for indexing by 30%."
            ]}
            technologies={["js-square", "angular", "node", "html5", "css3"]}
          />
          <ProjectBlock
            name={"DXL"}
            image={"https://www.destinationxl.com/assets/images/dxl-logo.svg"}
            siteurl={"https://www.destinationxl.com"}
            content={["Successfully redesigned the website ,transforming the website from a multi-page architecture to a single-page architecture under a <span className='bold-text'>very tight deadline.</span>","The website also caters <span className='bold-text'>SEO through server-side rendering</span>,which runs on Angular Universal and Express","Improved accessibility based on A11y standards and overall responsiveness of the website"]}
            technologies={["js-square", "angular", "node", "html5", "css3"]}
          />
           <ProjectBlock
            name={"SOLR XM"}
            image={"https://www.vectorlogo.zone/logos/apache_solr/apache_solr-card.png"}
            siteurl={"http://172.16.10.179:6080/"}
            content={[" Motivation behind this being, Solr is an open-source solution for search when compared to Oracle's Experience Manger.","The product has all the features found in the experience manger like. <span className='bold-text'>Facets, Ranges, Templates, Pages, Rules,Publishing and Zones</span>"," The entire application was developed in a very short period of <span className='bold-text'>a month</span>. Our team consisted of only two people. I handled the designs and also the front-end integration with the Solr services"]}
            technologies={["js-square", "angular", "node", "html5", "css3","docker"]}
          />
          <ProjectBlock 
            name={"TWG Companies"}
            image={require("../../assets/logo-pickBoxx.svg")}
            siteurl={"http://twgcompanies.com"}
            content={["Responsible for converting the wireframes into actual pages of the site","Handled both the <span className='bold-text'>front-end development as well as operations related to hosting</span>","Improved the performance of the site drastically, <span className='bold-text'>enabling higher traffic inflow to the website</span>","Ensured the sites responsiveness as well as accessiblity based on <span className='bold-text'>A11y standards</span>"]}
            technologies={["js-square", "wordpress","php", "html5", "css3"]}
            className={"second-line"}
          />
          <ProjectBlock 
            name={"TWG Homeremodeling"}
            image={require("../../assets/cropped-TWGHR.png")}
            siteurl={"http://twghomeremodeling.com"}
            content={[" Design and Translate wireframes/PSDs into launch-ready,valid HTML/CSS for the website","Entirely designend and developed the <span className='bold-text'>quote calculator</span> on the homepage","The site saw an <span className='bold-text'>increase in traffic by 40% after the implementation of the quote calculator</span>","The quote calculator was a novel idea for a home remodelling website, which was acknowledged by the customers to a great extent"]}
            technologies={["js-square", "wordpress","php", "html5", "css3"]}
            className={"second-line"}
            
          />
          <ProjectBlock 
            name={"Lachlist"}
            image={"http://www.lachlist.com/wp-content/uploads/2016/12/New-LachList-Logo-2-1600x384.png"}
            siteurl={"http://lachlist.com"}
            content={["Lachlist is a site which servers as a medium to connect the contractors to their clients","The site provides information such as 'Satisfaction','Rating','Defaulted Payments' etc","The idea was greatly welcomed by the contactors and <span className='bold-text'>improved the interaction by a huge margin</span>"]}
            technologies={["js-square", "wordpress","php", "html5", "css3"]}
            className={"second-line"}
          />
        </div>
        <br/>
        <h3 className="text-center Heading mx-auto">Some personal stuff</h3>
        <hr className="hr-style"/>
        <div className="row mt-5">
        <ProjectBlock 
            name={"Pokedex"}
            image={"https://vignette.wikia.nocookie.net/the-pokemon-sun-and-moon/images/4/4c/Pokeball.png/revision/latest/scale-to-width-down/480?cb=20161123053945"}
            siteurl={"https://github.com/dhirajsriram"}
            content={["A pokedex is a tool which gives all the information such as bio, attributes and also the evolution chain of a pokemon.","Used <span className='bold-text'>Pokéapi v2</span> ,which is a RESTful api to fetch the Pokemon's information","Used <span className='bold-text'>react router for routing and axios</span> to make HTTP calls","Have also developed a similar application in Angular. The motivation was to observe the way the two framework differentiate each other. (<span className='bold-text'>code formatting, partial rendering and two-way binding</span>)"]}
            technologies={["js-square", "react","node", "html5", "css3"]}
            className={"second-line"}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
