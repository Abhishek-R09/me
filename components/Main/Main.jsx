import React from 'react';
import Footer from './Footer/Footer';
import Intro from './Intro/Intro';
import About from './About/About';
import Timeline from './Timeline/Timeline';
import Project from './Project/Projects';
import Skills from './Skills/Skills';

const Main = () => (
  <main>
    <Intro />
    <About />
    <Project />
    <Timeline />
    <Skills />
    <Footer />
  </main>
);

export default Main;
