import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import classes from './Navigation.module.css';
// import Hamburger from './Hamburger/Hamburger';
// import MobileMenu from './MobileMenu/MobileMenu';
// import SidebarMini from './Sidebar/SidebarMini';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';

const NavigationBar = ({ toggleDarkMode, isDark }) => (
  // const [showNav, setShowNav] = useState(false);
  // const [windowSize, setWindowSize] = useState();

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     setWindowSize(window.innerWidth);
  //   });
  //   return () => {
  //     window.removeEventListener('resize', () => {
  //       setWindowSize(window.innerWidth);
  //     });
  //   };
  // }, [windowSize]);

  // const toggleMobileMenuHandler = () => {
  //   setShowNav((prevState) => !prevState);
  // };

  <>
    {/* {windowSize <= 768 ? (
        <>
          <div className={classes.navHamburger}>
            <Hamburger closed={!showNav} clicked={toggleMobileMenuHandler} />
          </div>
          <MobileMenu showNav={showNav} close={toggleMobileMenuHandler} />
        </>
      ) : (
        <DesktopNavigation />
      )} */}
    <DesktopNavigation toggleDarkMode={toggleDarkMode} isDark={isDark} />
  </>
);

NavigationBar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
};

export default NavigationBar;
