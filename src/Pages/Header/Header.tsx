import React, { useContext, useEffect, useState } from 'react';
import { ScrollContext } from '../../context/context';
import './Header.scss';

interface HeaderState {
  width: number;
  height: number;
}

interface HeaderProps {
  scroll: number;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [state, setState] = useState<HeaderState>({
    height: 182,
    width: 800,
  });
  const [scroll, setScroll] = useState<string | null>('about');
  const context = useContext(ScrollContext);
  const updateDimensions = () => {
    if (window) {
      if (window.innerWidth < 500) {
        setState({ width: 450, height: 102 });
      } else {
        const updateWidth = window.innerWidth - 100;
        const updateHeight = Math.round(updateWidth / 4.4);
        setState({ width: updateWidth, height: updateHeight });
      }
    }
  };

  useEffect(() => {
    updateDimensions();
    const mainSections = document.querySelectorAll('.resume-section');
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', (e) => {
        const fromTop = window.scrollY;
        mainSections.forEach((section: any) => {
          console.log(section.offsetTop);
          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            setScroll(section.id);
          } 
        });
      });
    }
  },        []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <div className="navbar-brand js-scroll-trigger">
        <span className="d-block d-lg-none Heading">Ds</span>
        <span className="d-none d-lg-block">
          <div className="logo">
            <a onClick={() => context.scrollPos('About')}> Ds</a>
          </div>
        </span>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <span
              className={`main-links ${scroll === 'about' ? 'active' : ''}`}
              onClick={() => context.scrollPos('About')}
            >
              <i className="fas fa-user" />
              <span className="menu-text">
                {state.width < 768 ? ' Home' : null}
              </span>
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`main-links ${scroll === 'me' ? 'active' : ''}`}
              onClick={() => context.scrollPos('Me')}
            >
              <i className="far fa-address-card" />
              <span className="menu-text">
                {state.width < 768 ? ' Me' : null}
              </span>
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`main-links ${
                scroll === 'experience' ? 'active' : ''
              }`}
              onClick={() => context.scrollPos('Experience')}
            >
              <i className="fas fa-briefcase" />
              <span className="menu-text">
                {state.width < 768 ? ' Experience' : null}
              </span>
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`main-links ${scroll === 'projects' ? 'active' : ''}`}
              onClick={() => context.scrollPos('Projects')}
            >
              <i className="fas fa-file-code" />
              <span className="menu-text">
                {state.width < 768 ? ' Portfolio' : null}
              </span>
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`main-links ${scroll === 'awards' ? 'active' : ''}`}
              onClick={() => context.scrollPos('Awards')}
            >
              <i className="fas fa-trophy" />
              <span className="menu-text">
                {state.width < 768 ? ' Awards' : null}
              </span>
            </span>
          </li>
          <li className="nav-item">
            <span
              className={`main-links ${scroll === 'contact' ? 'active' : ''}`}
              onClick={() => context.scrollPos('Contact')}
            >
              <i className="fas fa-phone" />
              <span className="menu-text">
                {state.width < 768 ? ' Contact' : null}
              </span>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
