import React from 'react';
import './Twitter.scss';

const Twitter: React.FC = () => {
  return (
    <div
      className="resume-section  p-3 d-flex flex-column transition-item"
      id="twitter"
    >
      <div className="my-auto projects-container">
        <h2 id="twitterh2" className="heading-padd" />
        <h2 className="m-5 Heading skills mt-3">FROM TWITTER</h2>
      </div>
      <div className="row mt-5">
        <a
          className="twitter-timeline"
          data-dnt="true"
          data-theme="dark"
          data-height="1200"
          href="https://twitter.com/dhiraj_sriram/likes?ref_src=twsrc%5Etfw"
        >
          Tweets Liked by @dhiraj_sriram
        </a>
      </div>
    </div>
  );
};

export default Twitter;
