import React from 'react';
import ContactMe from './ContactMe';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';

const Main = () => (
  <main className="mx-auto rounded-md py-0 px-5 text-white md:px-24 xsm:px-12">
    <Intro />
    <About />
    <Experience />
    <Projects />
    <ContactMe />
  </main>
);

export default Main;
