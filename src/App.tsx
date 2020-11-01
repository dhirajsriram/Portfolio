import React, { useEffect, useState } from 'react';
import About from './Segments/About/About';
import Awards from './Segments/Awards/Awards';
import Contact from './Segments/Contact/Contact';
import Experience from './Segments/Experience/Experience';
import Header from './Segments/Header/Header';
import Me from './Segments/Me/Me';
import Projects from './Segments/Projects/Projects';

import './App.scss';
import './index.scss';
import Technologies from './Segments/Technologies/Technologies';
import Twitter from './Segments/Twitter/Twitter';

interface AppState {
  height: number;
  scroll: number;
  url: string;
  width: number;
}

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    height: 182,
    scroll: 0,
    url: '',
    width: 800,
  });
  const handleScroll = () => {
    if (window) {
      setState({ ...state, scroll: window.scrollY });
    }
  };
  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', handleScroll);
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    }
  },        []);

  return (
    <div>
      <Header scroll={state.scroll} />
      <div
        className={
          state.scroll > 720 ? 'background-image bg-black yes-background' : 'background-image no-background bg-black'
        }
      >
        <About scroll={state.scroll} />
        <Me />
        <Technologies />
        <Experience />
        <Projects />
        <Awards />
        <Twitter />
        <Contact />
      </div>
    </div>
  );
};
export default App;
