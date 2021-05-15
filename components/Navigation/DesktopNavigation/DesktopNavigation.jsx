/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import { useEffect, useState } from 'react';
import classes from './DesktopNavigation.module.css';

const DesktopNavigation = () => {
  const [navbar, setNavbar] = useState(false);
  const scrollToSection = (sectionId) => {
    const scrollVal = document
      .getElementById(sectionId)
      .getBoundingClientRect().top;
    if (window.innerWidth > 768) {
      let adjust = 0;
      if (scrollVal !== 0) {
        adjust = -(window.innerWidth / 20);
      }
      window.scrollBy({
        top: scrollVal + adjust,
        behavior: 'smooth',
      });
    } else {
      window.scrollBy({
        top: scrollVal,
        behavior: 'smooth',
      });
    }
  };

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBg);
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  });

  return (
    <nav
      id="DesktopNavBar"
      className={`${classes.desktopNav} ${navbar ? classes.active : ''}`}
    >
      <ul className={classes.linksList}>
        <li>
          <button
            type="button"
            className={classes.linkBtn}
            onClick={() => scrollToSection('about')}
            title="Click to scroll to About section"
          >
            <PersonIcon titleAccess="About Icon" />
            <span>About</span>
          </button>
          <span />
        </li>
        <li>
          <button
            type="button"
            className={classes.linkBtn}
            onClick={() => scrollToSection('projects')}
            title="Click to scroll to Projects section"
          >
            <WorkIcon titleAccess="Projects Icon" />
            <span>Projects</span>
          </button>
          <span />
        </li>
        <li>
          <button
            type="button"
            className={classes.linkBtn}
            onClick={() => scrollToSection('timeline')}
            title="Click to scroll to Timeline section"
          >
            <SchoolIcon titleAccess="Timeline Icon" />
            <span>Timeline</span>
          </button>
          <span />
        </li>
        <li>
          <button
            type="button"
            className={classes.linkBtn}
            onClick={() => scrollToSection('skills')}
            title="Click to scroll to Skills section"
          >
            <BuildIcon titleAccess="Skills Icon" />
            <span>Skills</span>
          </button>
          <span />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
