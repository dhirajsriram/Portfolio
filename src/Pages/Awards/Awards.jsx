import React, { Component } from 'react';
import Work from "../Experience/Work"
class Awards extends Component {
    render() {
        return (
            <div className="resume-section  p-3 d-flex flex-column transition-item" >
        <div className="my-auto">
        <h2 id="awardsh2" class="heading-padd"> </h2>
          <h2 className="mb-5 Heading awards mt-3" >Awards &amp; Certifications</h2>
          <Work name={"Oracle CX Hackathon"} image={"http://www.pngmart.com/files/5/Oracle-PNG-Clipart.png"} devrole={"Dressing Room 2.0"} duties={["Designed an application which <span className='bold-text'>improves the dressing room experiece</span> of the customer","The goal of the application was to provide store assistance to customers using the dressing room","The customers can <span className='bold-text'>request different sizes</span> of the apparel which would then be fetched by the people working for the store","I concept was to have a screen embedded to the mirror of the dressing room for easy access","The application would have a <span className='bold-text'>fingerprint authentication for log-in and text-to-speech</span> capabilities","We were awarded the <span className='bold-text'>3rd place</span> for the concept"]} classValue={"awards"} duration={"<a className='bold-text' href='https://www.youtube.com/watch?v=CgXmPMG2dP8'><i className='fas fa-link'></i> Modern CX Hackathon 2018</a><br/>April 2018 | San Francisco, CA"} technologies={[
            "fab fa-html5",
            "fab fa-css3",
            "fab fa-js-square",
            "fab fa-google",
          ]}/>
        </div>
      </div>

        );
    }
}

export default Awards;