import React, { useContext } from 'react';
import { ScrollContext } from '../../context/context';

interface MenuItemsState {
    scroll: string | null; 
}

const MenuItems: React.FC<MenuItemsState> = (props) => {
    const context = useContext(ScrollContext);
    return (
        <ul className="navbar-nav" onClick={(e) => e.stopPropagation()}>
      <li className="nav-item">
        <span
          className={`main-links ${props.scroll === 'about' ? 'active' : ''}`}
          onClick={() => context.scrollPos('About')}
        >
          <i className="fas fa-user" />
          <span className="menu-text">Home</span>
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`main-links ${props.scroll === 'me' ? 'active' : ''}`}
          onClick={() => context.scrollPos('Me')}
        >
          <i className="far fa-address-card" />
          <span className="menu-text">Me</span>
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`main-links ${props.scroll === 'experience' ? 'active' : ''}`}
          onClick={() => context.scrollPos('Experience')}
        >
          <i className="fas fa-briefcase" />
          <span className="menu-text">Experience</span>
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`main-links ${props.scroll === 'projects' ? 'active' : ''}`}
          onClick={() => context.scrollPos('Projects')}
        >
          <i className="fas fa-file-code" />
          <span className="menu-text">Portfolio</span>
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`main-links ${props.scroll === 'awards' ? 'active' : ''}`}
          onClick={() => context.scrollPos('Awards')}
        >
          <i className="fas fa-trophy" />
          <span className="menu-text">Awards</span>
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`main-links ${props.scroll === 'twitter' ? 'active' : ''}`}
          onClick={() => context.scrollPos('Twitter')}
        >
          <i className="fab fa-twitter" />
          <span className="menu-text">Twitter</span>
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`main-links ${props.scroll === 'contact' ? 'active' : ''}`}
          onClick={() => context.scrollPos('Contact')}
        >
          <i className="fas fa-phone" />
          <span className="menu-text">Contact</span>
        </span>
      </li>
    </ul>
    );
};

export default MenuItems;