/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import Image from 'next/image';
import classes from './Sidebar.module.css';

const SidebarMini = () => {
  const scrollToSection = (sectionId) => {
    console.log(sectionId);
    window.scrollBy({
      top: document.getElementById(sectionId).getBoundingClientRect().top,
      behavior: 'smooth',
    });
  };
  return (
    <nav className={classes.desktopMini}>
      <Image
        className={classes.profile2}
        src="/static/images/profileImg.jpg"
        alt="Abhishek Ramasubramanian"
        layout="fixed"
        width={60}
        height={60}
      />
      <div>
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          title="Click to scroll to About section"
        >
          <PersonIcon titleAccess="About Icon" />
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('projects')}
          title="Click to scroll to Projects section"
        >
          <WorkIcon titleAccess="Projects Icon" />
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('timeline')}
          title="Click to scroll to Timeline section"
        >
          <SchoolIcon titleAccess="Timeline Icon" />
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('skills')}
          title="Click to scroll to Skills section"
        >
          <BuildIcon titleAccess="Skills Icon" />
        </button>
      </div>
    </nav>
  );
};

export default SidebarMini;
