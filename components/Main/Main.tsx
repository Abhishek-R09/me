import React from 'react';
import ContactMe from './ContactMe';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';

const Main = () => (
  <main className="mx-auto rounded-md py-0 px-5 xsm:px-8 md:px-24 lg:px-36">
    <Intro />
    <About />
    <Experience />
    <Projects />
    <ContactMe />
  </main>
);

export default Main;
