import React from 'react';
export const ScrollContext = React.createContext({
  scrollPos: (type: string) => {
    let element: HTMLElement | null;
    switch (type) {
      
      case 'About':
        window.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: 0,
        });
        break;

      case 'Me':
        element = document.getElementById('me');
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;

      case 'Experience':
        element = document.getElementById('experience');
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;

      case 'Projects':
        element = document.getElementById('projects');
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;

      case 'Awards':
        element = document.getElementById('awards');
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;

      case 'Twitter':
        element = document.getElementById('twitter');
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;

      case 'Contact':
        element = document.getElementById('contact');
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;

      default:
        window.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: 0,
        });
        break;
    }
  },
});
