
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";


function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Resume />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
