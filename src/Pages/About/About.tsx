import React, { useContext } from 'react';
import { ScrollContext } from '../../context/context';
import './About.scss';
import './TextAnimation';

interface AboutInterface {
  scroll: number;
}

const About: React.FC<AboutInterface> = (props) => {
  const context = useContext(ScrollContext);

  return (
    <div
      className="resume-section about p-3 d-flex d-column transition-item"
      id="about"
    >
      <video autoPlay={true} muted={true} loop={true} id="myVideo">
        <source src={require('../../assets/line-bg.mp4')} />
        Your browser does not support HTML5 video.
      </video>
      <div className="my-auto content">
        <h1 className="Heading">
          <span className="letters">Dhiraj Sriram</span>
        </h1>
        <div className="ml4 subheading text-white">
          <span className="letters letters-1">UI/UX Developer</span>
          <span className="letters letters-2">Front end Engineer</span>
        </div>

        <p className="lead mb-5 ext-truncat text-center">
          <span className="d-block">Sr Frontend Engineer based in Berlin, DE. </span>
          <span className="d-block">
            Highly experienced in developing and implementing User Interfaces in{' '}
            <i className="fab fa-angular" /> & <i className="fab fa-react" />
          </span>
        </p>
      </div>
      <a
        onClick={() => context.scrollPos('Projects')}
        className={
          props.scroll && props.scroll !== 0 ? 'fadeMe none' : 'fadeMe'
        }
      >
        <button type="button" className="portfolio links hvr-bounce-in">
          Portfolio <i className="fas fa-angle-double-right" />
        </button>
      </a>
      <a
        onClick={() => context.scrollPos('Contact')}
        className={
          props.scroll && props.scroll !== 0 ? 'fadeMe none' : 'fadeMe'
        }
      >
        <button type="button" className="contact links hvr-bounce-in">
          Contact me
          <i className="fas fa-angle-double-down" />
        </button>
      </a>
    </div>
  );
};

export default About;
