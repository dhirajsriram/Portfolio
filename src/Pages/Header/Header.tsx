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
  const [expand, setExpand] = useState<boolean>(false);
  const [scroll, setScroll] = useState<string | null>('about');
  const context = useContext(ScrollContext);

  const MenuItems = () => (
    <ul className="navbar-nav" onClick={(e) => e.stopPropagation()}>
      <li className="nav-item">
        <span
          className={`main-links ${scroll === 'about' ? 'active' : ''}`}
          onClick={() => context.scrollPos('About')}
        >
          <i className="fas fa-user" />
          <span className="menu-text">Home</span>
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`main-links ${scroll === 'me' ? 'active' : ''}`}
          onClick={() => context.scrollPos('Me')}
        >
          <i className="far fa-address-card" />
          <span className="menu-text">Me</span>
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`main-links ${scroll === 'experience' ? 'active' : ''}`}
          onClick={() => context.scrollPos('Experience')}
        >
          <i className="fas fa-briefcase" />
          <span className="menu-text">Experience</span>
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`main-links ${scroll === 'projects' ? 'active' : ''}`}
          onClick={() => context.scrollPos('Projects')}
        >
          <i className="fas fa-file-code" />
          <span className="menu-text">Portfolio</span>
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`main-links ${scroll === 'awards' ? 'active' : ''}`}
          onClick={() => context.scrollPos('Awards')}
        >
          <i className="fas fa-trophy" />
          <span className="menu-text">Awards</span>
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`main-links ${scroll === 'contact' ? 'active' : ''}`}
          onClick={() => context.scrollPos('Contact')}
        >
          <i className="fas fa-phone" />
          <span className="menu-text">Contact</span>
        </span>
      </li>
    </ul>
  );

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

  const toggleMenu = (e: any) => {
    e.stopPropagation();
    setExpand(!expand);
  };

  useEffect(() => {
    updateDimensions();
    const mainSections = document.querySelectorAll('.resume-section');
    window.addEventListener('click', () => {
      setExpand(false);
    });

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', (e) => {
        const fromTop = window.scrollY;
        mainSections.forEach((section: any) => {
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
        className={`navbar-mobile-menu${expand ? '' : ' collapsed'}`}
        type="button"
        data-toggle="collapse"
        onClick={(e) => toggleMenu(e)}
      >
        <span className="icon-bar top-bar"/>
        <span className="icon-bar middle-bar"/>
        <span className="icon-bar bottom-bar"/>
      </button>
      {expand && (
        <div className="mobile-menu">
          <MenuItems />
        </div>
      )}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <MenuItems />
      </div>
    </nav>
  );
};

export default Header;
