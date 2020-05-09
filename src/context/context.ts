import React from 'react';
export const ScrollContext = React.createContext({
  scrollPos: (type: string) => {
    let element: HTMLElement | null;
    switch (type) {
      case 'About':
        element = document.getElementById('about');
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
        element = document.getElementById('experienceh2');
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;

      case 'Projects':
        element = document.getElementById('skillsh2');
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;

      case 'Awards':
        element = document.getElementById('awardsh2');
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;

      case 'Contact':
        element = document.getElementById('contacth2');
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;

      default:
        element = document.getElementById('abouth2');
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
    }
  },
});
