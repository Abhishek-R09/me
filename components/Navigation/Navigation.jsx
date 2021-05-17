/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Navigation.module.css';
import useLoaded from '../../hooks/use-loaded';

const useStyles = makeStyles((theme) => ({
  desktopNav: {
    backgroundColor: theme.palette.primary.navInitial,
    '@media screen and (max-width: 768px)': {
      backgroundColor: theme.palette.primary.nav,
    },
  },
  navActive: {
    backgroundColor: theme.palette.primary.nav,
  },
  name: {
    color: theme.palette.primary.fontColor2,
  },
  nameActive: {
    '@media screen and (max-width: 768px)': {
      backgroundColor: theme.palette.primary.navInitial,
    },
  },
  linkBtn: {
    color: theme.palette.primary.fontColor1,
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover + span': {
        backgroundColor: theme.palette.primary.fontColor1,
      },
    },
  },
  linkBtnActive: {
    color: theme.palette.primary.fontColor2,
    '& + span': {
      backgroundColor: theme.palette.primary.fontColor2,
    },
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover': {
        '& + span': {
          backgroundColor: theme.palette.primary.fontColor2,
        },
      },
    },
  },
  themeToggleBtn: {
    color: theme.palette.primary.fontColor1,
    backgroundColor: theme.palette.primary.card,
    boxShadow: '#0c0c0c 2px 4px 2px 0px',
    '&:hover': {
      color: theme.palette.primary.fontColor2,
    },
    '@media screen and (max-width: 768px)': {
      backgroundColor: theme.palette.primary.nav,
      border: `2px solid ${theme.palette.primary.card}`,
      boxShadow: '#0c0c0c 2px 4px 2px 0px',
    },
  },
}));

const Navigation = ({ toggleDarkMode, isDark }) => {
  const localClasses = useStyles();
  const loaded = useLoaded();
  const [navbar, setNavbar] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState();
  const [visible, setVisible] = useState(true);

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
      window.removeEventListener('scroll', changeBg);
    };
  }, [changeBg]);

  const changeLinkState = () => {
    const links = document.querySelectorAll(`.${classes.linkBtn}`);
    const sections = document.querySelectorAll('section');
    let index = sections.length;
    const scrollPos = window.scrollY;
    const WindowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      while (
        // eslint-disable-next-line no-plusplus
        --index &&
        scrollPos + WindowHeight <
          sections[index].offsetTop +
            sections[index].getBoundingClientRect().height / 2
      ) {
        // eslint-disable-next-line no-empty
      }
    } else if (windowWidth > 600) {
      while (
        // eslint-disable-next-line no-plusplus
        --index &&
        scrollPos + WindowHeight <
          sections[index].offsetTop +
            sections[index].getBoundingClientRect().height / 3
      ) {
        // eslint-disable-next-line no-empty
      }
    } else {
      while (
        // eslint-disable-next-line no-plusplus
        --index &&
        scrollPos + WindowHeight <
          sections[index].offsetTop +
            sections[index].getBoundingClientRect().height / 4
      ) {
        // eslint-disable-next-line no-empty
      }
    }

    links.forEach((link) => {
      link.classList.remove(classes.active);
      link.classList.remove(localClasses.linkBtnActive);
    });
    links[index].classList.add(classes.active);
    links[index].classList.add(localClasses.linkBtnActive);
    if (
      index === 0 &&
      scrollPos + WindowHeight <
        sections[index].offsetTop +
          sections[index].getBoundingClientRect().height / 2
    ) {
      links[index].classList.remove(classes.active);
      links[index].classList.remove(localClasses.linkBtnActive);
    }
  };

  const toggleThemeButton = () => {
    const currentScrollPos = window.pageYOffset;
    const currVisible = prevScrollpos > currentScrollPos;

    setPrevScrollpos(currentScrollPos);
    setVisible(currVisible);
    // setVisible((prev) => !prev);
  };

  const handleScroll = () => {
    changeLinkState();
    if (window.innerWidth <= 768) {
      toggleThemeButton();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      id="DesktopNavBar"
      className={`${classes.desktopNav} ${navbar ? classes.active : ''} ${
        localClasses.desktopNav
      } ${navbar ? localClasses.navActive : ''}`}
    >
      <span
        className={`${classes.name} ${navbar ? classes.active : ''} ${
          localClasses.name
        } ${!navbar ? localClasses.nameActive : ''}`}
      >
        Abhishek Ramasubramanian
      </span>
      <ul className={classes.linksList}>
        <li>
          <button
            type="button"
            className={`${classes.linkBtn} ${localClasses.linkBtn}`}
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
            className={`${classes.linkBtn} ${localClasses.linkBtn}`}
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
            className={`${classes.linkBtn} ${localClasses.linkBtn}`}
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
            className={`${classes.linkBtn} ${localClasses.linkBtn}`}
            onClick={() => scrollToSection('skills')}
            title="Click to scroll to Skills section"
          >
            <BuildIcon titleAccess="Skills Icon" />
            <span>Skills</span>
          </button>
          <span />
        </li>
      </ul>
      <Tooltip
        TransitionComponent={Zoom}
        title={`Change to ${isDark ? 'light' : 'dark'} theme`}
        arrow
      >
        <button
          type="button"
          className={`${classes.themeToggleBtn} ${localClasses.themeToggleBtn}`}
          onClick={toggleDarkMode}
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          style={{ right: !visible ? '-50px' : 0 }}
        >
          {isDark && loaded ? <Brightness3Icon /> : <BrightnessHighIcon />}
        </button>
      </Tooltip>
    </nav>
  );
};

Navigation.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
};

export default Navigation;
