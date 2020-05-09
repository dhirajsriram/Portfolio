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
    width: 800
  });
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
  useEffect(() => { updateDimensions(); }, []);

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
              className={
                props.scroll >= 0 && props.scroll <= 722
                  ? 'active main-links'
                  : 'main-links'
              }
              onClick={() => context.scrollPos('About')}
            >
              <i className="fas fa-user" />
              {state.width < 768 ? ' Home' : null}
            </span>
          </li>
          <li className="nav-item">
            <span
              className={
                props.scroll > 723 && props.scroll <= 1999
                  ? 'active main-links'
                  : 'main-links'
              }
              onClick={() => context.scrollPos('Me')}
            >
              <i className="far fa-address-card" />
              {state.width < 768 ? ' Me' : null}
            </span>
          </li>
          <li className="nav-item">
            <span
              className={
                props.scroll >= 2000 && props.scroll <= 3019
                  ? 'active main-links'
                  : 'main-links'
              }
              onClick={() => context.scrollPos('Experience')}
            >
              <i className="fas fa-briefcase" />
              {state.width < 768 ? ' Experience' : null}
            </span>
          </li>
          <li className="nav-item">
            <span
              className={
                props.scroll >= 3020 && props.scroll <= 4970
                  ? 'active main-links'
                  : 'main-links'
              }
              onClick={() => context.scrollPos('Projects')}
            >
              <i className="fas fa-file-code" />
              {state.width < 768 ? ' Portfolio' : null}
            </span>
          </li>
          <li className="nav-item">
            <span
              className={
                props.scroll >= 4971 && props.scroll <= 5439
                  ? 'active main-links'
                  : 'main-links'
              }
              onClick={() => context.scrollPos('Awards')}
            >
              <i className="fas fa-trophy" />
              {state.width < 768 ? ' Awards' : null}
            </span>
          </li>
          <li className="nav-item">
            <span
              className={
                props.scroll >= 5440 ? 'active main-links' : 'main-links'
              }
              onClick={() => context.scrollPos('Contact')}
            >
              <i className="fas fa-phone" />
              {state.width < 768 ? ' Contact' : null}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
