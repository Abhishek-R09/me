import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import classes from './footer.module.css';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: theme.palette.primary.fontColor1,
  },
  contact: {
    '& a svg:hover': {
      color: theme.palette.primary.fontColor2,
    },
  },
  contactMe: {
    '& span': {
      color: theme.palette.primary.fontColor2,
      '& svg': {
        color: theme.palette.primary.fontColor1,
      },
    },
  },
  githubColor: {
    color: theme.palette.type === 'light' ? '#000000' : '#FFFFFF',
  },
}));

const Footer = () => {
  const localClasses = useStyles();
  return (
    <footer className={`${classes.footer} ${localClasses.footer}`}>
      <div className={`${classes.contact} ${localClasses.contact}`}>
        <span className={`${classes.contactMe} ${localClasses.contactMe}`}>
          <span>Feel free to contact me 🙂</span>
          <span>
            <ArrowForwardIcon />
          </span>
        </span>
        <ul className={classes.contactsUl}>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=0901abhishek.r@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail to Abhishek Ramasubramanian"
              style={{ color: '#E94034' }}
            >
              <EmailIcon style={{ fontSize: 30 }} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abhishek-ramasubramanian-74b2941a3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reach Abhishek Ramasubramanian on LinkedIn"
              style={{ color: '#0A66C2' }}
            >
              <LinkedInIcon style={{ fontSize: 30 }} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Abhishek911cse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reach Abhishek Ramasubramanian on GitHub"
              className={localClasses.githubColor}
            >
              <GitHubIcon style={{ fontSize: 30 }} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/abhishekR_09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reach Abhishek Ramasubramanian on Twitter"
              style={{ color: '#1DA1F2' }}
            >
              <TwitterIcon style={{ fontSize: 30 }} />
            </a>
          </li>
        </ul>
      </div>
      {/* <small>Feel free to contact me 🙂</small>{' '} */}
    </footer>
  );
};

export default Footer;
