import React, { Component } from "react";
import Header from "./pages/Header/Header";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
// import Interests from './pages/Interests/Interests'
import Projects from "./pages/Projects/Projects";
import Awards from "./pages/Awards/Awards";
// import PageShell from './pages/About/pageShell'
import Contact from "./pages/Contact/Contact";
import Me from "./pages/Me/Me";
import { ScrollContext } from "./context/context";
import "./index.css";
import "./App.css";
// import { Route } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      scroll: "",
      width: 800,
      height: 182,
    };
  }
  componentDidMount() {
    if (window) {
      window.addEventListener("scroll", this.handleScroll);
    }
  }
  componentDidUpdate(prevProps) {
    if (window) {
      window.addEventListener("scroll", this.handleScroll);
    }
  }

  handleScroll = () => {
    if (window) {
      this.setState({ scroll: window.scrollY });
    }
  };
  scrollPos(type) {
    var element = "";
    switch (type) {
      case "About":
        element = document.getElementById("about");
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });

        break;

      case "Me":
        element = document.getElementById("me");
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;

      case "Experience":
        element = document.getElementById("experienceh2");
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;

      case "Projects":
        element = document.getElementById("skillsh2");
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;

      case "Awards":
        element = document.getElementById("awardsh2");
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;

      case "Contact":
        element = document.getElementById("contacth2");
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;

      default:
        element = document.getElementById("abouth2");
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        break;
    }
  }
  updateDimensions() {
    if (window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width = window.innerWidth - 100;
      let update_height = Math.round(update_width / 4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }
  render() {
    return (
      <div>
        <ScrollContext.Provider
          value={{
            scrollPos: this.scrollPos,
          }}
        >
          <Header scroll={this.state.scroll} />
          <div
            className={
              this.state.scroll > 720
                ? "background-image bg-black"
                : "background-image no-background bg-black"
            }
          >
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
export default App;
