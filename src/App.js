import React from "react";
import './index.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <main>
      
        <About />
        <Skills/>
        <Projects />
        <Contact />
        <Footer/>
      </main>
      <ScrollToTop/>
    </div>
  );
}

export default App;
