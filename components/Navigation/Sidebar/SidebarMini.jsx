import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import BuildIcon from "@material-ui/icons/Build";
import NavLinks from "../NavLinks";
import classes from "./Sidebar.module.css";
// import myImg from "../../../public/images/profileImg.jpg";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";

const SidebarMini = (props) => {
  const [expandNav, setExpandNav] = useState(false);
  return (
    <div
      onMouseOver={() => setExpandNav(true)}
      onMouseLeave={() => setExpandNav(false)}
    >
      <div
        className={classes.desktopMini}
        onMouseOver={() => setExpandNav(true)}
      >
        <Image
          className={classes.profile2}
          src="/static/images/profileImg.jpg"
          alt="Abhishek Ramasubramanian"
          layout="fixed"
          width={60}
          height={60}
        />
        <div className={classes.common}>
          <AnchorLink
            offset={() => 20}
            href="#about"
            className={classes.expandedNavLinks}
          >
            <PersonIcon />
          </AnchorLink>
          <AnchorLink
            offset={() => 20}
            href="#projects"
            className={classes.expandedNavLinks}
          >
            <WorkIcon />
          </AnchorLink>
          <AnchorLink
            offset={() => 20}
            href="#timeline"
            className={classes.expandedNavLinks}
          >
            <SchoolIcon />
          </AnchorLink>
          <AnchorLink
            offset={() => 20}
            href="#skills"
            className={classes.expandedNavLinks}
          >
            <BuildIcon />
          </AnchorLink>
        </div>
      </div>
      <CSSTransition
        in={expandNav}
        timeout={300}
        classNames={{ ...classes }}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.expandedNav}>
          <Image
            src="/static/images/profileImg.jpg"
            className={classes.profile2}
            alt="Abhishek Ramasubramanian"
            style={{ visibility: "hidden !important" }}
            layout="fixed"
            width={60}
            height={60}
          />
          <div>
            <AnchorLink
              offset={() => 20}
              href="#about"
              tabIndex="-1"
              className={classes.expandedNavLinks}
            >
              About
            </AnchorLink>

            <AnchorLink
              offset={() => 20}
              href="#projects"
              tabIndex="-1"
              className={classes.expandedNavLinks}
            >
              Projects
            </AnchorLink>

            <AnchorLink
              offset={() => 20}
              href="#timeline"
              tabIndex="-1"
              className={classes.expandedNavLinks}
            >
              Timeline
            </AnchorLink>

            <AnchorLink
              offset={() => 20}
              href="#skills"
              tabIndex="-1"
              className={classes.expandedNavLinks}
            >
              Skills
            </AnchorLink>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default SidebarMini;
