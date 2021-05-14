import React from 'react';
import Footer from './Footer/Footer';
import Intro from './Intro/Intro';
import About from './About/About';
import Timeline from './Timeline/Timeline';
import Project from './Project/Projects';
import Skills from './Skills/Skills';
import classes from './main.module.css';

const Main = () => (
  <main className={classes.main}>
    <Intro />
    <About />
    <Project />
    <Timeline />
    <Skills />
    <hr className={classes.footerHR} />
    <Footer />
  </main>
);

export default Main;
