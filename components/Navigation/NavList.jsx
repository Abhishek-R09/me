import React from "react";
import NavLinks from "./NavLinks";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
// import ContactsIcon from "@material-ui/icons/Contacts";
import BuildIcon from "@material-ui/icons/Build";
import classes from "./NavList.module.css";

const NavList = (props) => {
  return (
    <ul className={classes.NavList}>
      <NavLinks
        whichPart="about"
        linkName="About"
        linkIcon={<PersonIcon />}
        close={props.close}
      />
      <NavLinks
        whichPart="projects"
        linkName="Projects"
        linkIcon={<WorkIcon />}
        close={props.close}
      />
      <NavLinks
        whichPart="timeline"
        linkName="Timeline"
        linkIcon={<SchoolIcon />}
        close={props.close}
      />

      <NavLinks
        whichPart="skills"
        linkName="Skills"
        linkIcon={<BuildIcon />}
        close={props.close}
      />
      {/* <NavLinks
        whichPart="contact"
        name="Contact"
        linkIcon={<ContactsIcon />}
      /> */}
    </ul>
  );
};

export default NavList;
