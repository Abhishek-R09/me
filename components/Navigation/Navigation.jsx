import React, { useEffect, useState } from 'react';
import classes from './Navigation.module.css';
import Hamburger from './Hamburger/Hamburger';
import MobileMenu from './MobileMenu/MobileMenu';
import SidebarMini from './Sidebar/SidebarMini';

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setWindowSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWindowSize(window.innerWidth);
      });
    };
  }, [windowSize]);

  const toggleMobileMenuHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <div>
      {windowSize <= 768 ? (
        <>
          <div className={classes.navHamburger}>
            <Hamburger closed={!showNav} clicked={toggleMobileMenuHandler} />
          </div>
          <MobileMenu showNav={showNav} close={toggleMobileMenuHandler} />
        </>
      ) : (
        <SidebarMini />
      )}
    </div>
  );
};

export default NavigationBar;
