import React, { Component } from 'react';

class Interests extends Component {
    render() {
        return (
            <div className="resume-section  p-3 d-flex flex-column transition-item" >
        <div className="my-auto">
        <h2 id="interestsh2" className="heading-padd"> </h2>
          <h2 className="mb-5 Heading mt-3" >Interests</h2>
          <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
          <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
        </div>
      </div>
        );
    }
}

export default Interests;