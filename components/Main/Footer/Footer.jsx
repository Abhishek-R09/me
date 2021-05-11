import React from "react";
import classes from "./footer.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      {" "}
      <div className={classes.contact}>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=0901abhishek.r@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mail to Abhishek Ramasubramanian"
          style={{ color: "#E94034" }}
        >
          <EmailIcon style={{ fontSize: 30 }} />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-ramasubramanian-74b2941a3/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reach Abhishek Ramasubramanian on LinkedIn"
          style={{ color: "#0A66C2" }}
        >
          <LinkedInIcon style={{ fontSize: 30 }} />
        </a>
        <a
          href="https://github.com/Abhishek911cse"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reach Abhishek Ramasubramanian on GitHub"
          style={{ color: "#FFFFFF" }}
        >
          <GitHubIcon style={{ fontSize: 30 }} />
        </a>
        <a
          href="https://twitter.com/abhishekR_09"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reach Abhishek Ramasubramanian on Twitter"
          style={{ color: "#1DA1F2" }}
        >
          <TwitterIcon style={{ fontSize: 30 }} />
        </a>
      </div>
      <small>Feel free to contact me 🙂</small>{" "}
    </footer>
  );
};

export default Footer;
