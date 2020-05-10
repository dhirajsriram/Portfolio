import React from 'react';
import Bubble from './Bubble';
import './Me.scss';
import ProgressBar from './ProgressBar';

const Me: React.FC  = () => {
  return (
    <div className="resume-section  p-3 d-flex flex-column transition-item me" id="me">
      <h2 id="meh2" className="heading-padd" />
      <h1 className="subheading text-white text-center Hi">
        Hi, Im Dhiraj. Nice to meet you
      </h1>
      <p className="about-me text-center">
        I{' '}
        <span role="img" aria-label="heart">
          💗
        </span>{' '}
        to design and develop solutions that empowers Usability, Accessibility,
        Performance, Search engine optimization and responsiveness.
      </p>
      <h1 className="subheading text-white text-center Hi">
        What I'm responsible for
      </h1>
      <div className="row">
        <Bubble
          itemName={'Responsive'}
          itemClass={'fas fa-mobile-alt'}
          information={'Responsive first, thats my policy'}
        />
        <Bubble
          itemName={'Accessibility'}
          itemClass={'fab fa-accessible-icon'}
          information={'The websites I develop adhere to A11y standards'}
        />
        <Bubble
          itemName={'SPA'}
          itemClass={'fas fa-window-maximize'}
          information={
            'Experienced in delivering quality, Single Page Applications'
          }
        />
        <Bubble
          itemName={'PWA'}
          itemClass={'fas fa-mobile-alt'}
          information={'Progressive Web Apps, Thats the future'}
        />
        <Bubble
          itemName={'Fast'}
          itemClass={'fas fa-bolt'}
          information={'Commited to deliver Efficient and reliable code'}
        />
        <Bubble
          itemName={'Resuable'}
          itemClass={'fas fa-recycle'}
          information={'My code is as reusable as it is Efficient'}
        />
      </div>

      <div className="row mt-5">
        <div className="col-sm-12 col-lg-6 text-center col-12">
          <div className="mt-5 profile-img">
            <img
              className="img-responsive"
              alt="dhiraj-logo"
              src={require('../../assets/me.jpg')}
            />
            <div className="who-is">
              <h3 className="subHeading text-white bubble-header">
                Who is Dhiraj?
              </h3>
              <p className="About-me">
                I work as a UI developer for{' '}
                <a className="bold-text" href="https://saucelabs.com/">
                  {' '}
                  Saucelabs, GmbH
                </a>{' '}
                in Berlin, DE. I am a guy that has a serious passion for
                designing user-friendly, efficient, reliable and intutive
                User-Interfaces.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 col-12 p-5">
          <ProgressBar percent={'90%'} name={'Angular'} />
          <ProgressBar percent={'90%'} name={'React'} />
          <ProgressBar percent={'90%'} name={'HTML5'} />
          <ProgressBar percent={'90%'} name={'CSS3'} />
          <ProgressBar percent={'80%'} name={'JS/TS'} />
          <ProgressBar percent={'80%'} name={'SASS/LESS'} />
          <ProgressBar percent={'80%'} name={'Node'} />
          <ProgressBar percent={'60%'} name={'UI Design'} />
          <ProgressBar percent={'60%'} name={'Photoshop'} />
        </div>
      </div>
    </div>
  );
};

export default Me;
