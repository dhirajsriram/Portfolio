import React, { Component } from 'react';
import './App.css';
import './assets/resume.css';
import Header from './Pages/Header/Header';
import About from './Pages/About/About'
import Experience from './Pages/Experience/Experience'
import Interests from './Pages/Interests/Interests'
import Projects from './Pages/Projects/Projects'
import Awards from './Pages/Awards/Awards'
import PageShell from './Pages/About/pageShell'
import Contact from './Pages/Contact/Contact'
import Me from './Pages/Me/Me'

import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
        <Header/>
        <Route exact path="/" component={PageShell(About)} />
        <Route path="/Me" component={PageShell(Me)} />
        <Route path="/About" component={PageShell(About)} />
        <Route path="/Experience" component={PageShell(Experience)} />
        <Route path="/Projects" component={PageShell(Projects)} />
        <Route path="/Interests" component={PageShell(Interests)} />
        <Route path="/Awards" component={PageShell(Awards)} />
        <Route path="/Contact" component={PageShell(Contact)} />
        </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
