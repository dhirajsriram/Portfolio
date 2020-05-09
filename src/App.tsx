import React, { useEffect, useState } from 'react';
import About from './pages/About/About';
import Awards from './pages/Awards/Awards';
import Contact from './pages/Contact/Contact';
import Experience from './pages/Experience/Experience';
import Header from './pages/Header/Header';
import Me from './pages/Me/Me';
import Projects from './pages/Projects/Projects';

import './App.scss';
import './index.scss';

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
    }
  });

  return (
    <div>
      <Header scroll={state.scroll} />
      <div
        className={
          state.scroll > 720
            ? 'background-image bg-black'
            : 'background-image no-background bg-black'
        }
      >
        <About scroll={state.scroll} />
        <Me />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </div>
    </div>
  );
};
export default App;
