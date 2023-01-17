import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SocialMedia />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

