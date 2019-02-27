import React, { Component } from 'react';
import './App.css';
import './assets/resume.css';
import Header from './Pages/Header/Header';
import About from './Pages/About/About'
import Experience from './Pages/Experience/Experience'
// import Interests from './Pages/Interests/Interests'
import Projects from './Pages/Projects/Projects'
import Awards from './Pages/Awards/Awards'
// import PageShell from './Pages/About/pageShell'
import Contact from './Pages/Contact/Contact'
import Me from './Pages/Me/Me'
import { withRouter } from 'react-router-dom';
import {ScrollContext} from './context/context'
// import { Route } from "react-router-dom";
class App extends Component {
  
  constructor() {
    super();
    this.state = {
      url:  "",
      scroll:"",
      width:  800,
      height: 182
    }
  }
  updateUrl() {
   this.setState({url:window.location.pathname})
    
  }
  componentDidMount(){
    this.updateUrl()
    window.addEventListener('scroll', this.handleScroll);
  }
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.updateUrl();
      }
      window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
      this.setState({scroll:window.scrollY})
  }
  scrollPos(type){
    var element = "";
    switch(type)
    { 
      
      case "About":
      element = document.getElementById("about");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      break;

      case "Me":
      element = document.getElementById("me");
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      break;

      case "Experience":
      element = document.getElementById("experienceh2");
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      break;

      case "Projects":
      element = document.getElementById("skillsh2");
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      break;

      case "Awards":
      element = document.getElementById("awardsh2");
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      break;

      case "Contact":
      element = document.getElementById("contacth2");
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      break;

      default:
      element = document.getElementById("abouth2");
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      break;
    }
  }
  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }
  render() {
    return (
      <div>
        <ScrollContext.Provider value={{
          scrollPos : this.scrollPos
        }}>
        <Header scroll={this.state.scroll}/>
        <div className={(this.state.scroll > 720)?"background-image bg-black":"background-image no-background bg-black"}>
        <About scroll={this.state.scroll}></About>
        <Me></Me>
        <Experience></Experience>
        <Projects></Projects>
        <Awards></Awards>
        <Contact></Contact>
        </div>
        </ScrollContext.Provider>
      </div>
    );
  }
}

export default withRouter(App);
