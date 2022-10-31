import React from 'react';
// import { Tooltip, Zoom } from '@material-ui/core';
// import {
//   GitHub as GitHubIcon,
//   Twitter as TwitterIcon,
//   LinkedIn as LinkedInIcon,
//   Email as EmailIcon,
//   ArrowForward as ArrowForwardIcon,
// } from '@material-ui/icons';
// import { makeStyles } from '@material-ui/core/styles';
import classes from './footer.module.css';

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     color: theme.palette.primary.fontColor1,
//   },
//   contact: {
//     '& a svg:hover': {
//       color: theme.palette.primary.fontColor2,
//     },
//   },
//   contactMe: {
//     '& span': {
//       color: theme.palette.primary.fontColor2,
//       '& svg': {
//         color: theme.palette.primary.fontColor1,
//       },
//     },
//   },
//   githubColor: {
//     color: theme.palette.type === 'light' ? '#000000' : '#FFFFFF',
//   },
//   credits: {
//     color: theme.palette.primary.fontColor2,
//     textDecoration: 'none',
//   },
// }));

const ContactMe = () => {
  // const localClasses = useStyles();
  return (
    <footer id="contact-me" className="pb-20">
      <h2 className="mx-0 mb-10 flex w-full grow basis-1/2 items-center text-lg font-bold text-slate-300 before:relative before:mr-3 before:h-px before:w-full before:grow before:basis-1/5 before:bg-emerald-300 after:relative after:ml-3 after:h-px after:w-full after:grow after:basis-1/5 after:bg-emerald-300">
        Get In Touch
      </h2>
      <p className="mb-10 text-slate-400">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a
        href="mailto:abhishek.ramasubramanian@gmail.com"
        className=" b-1 mx-auto mt-3 block w-fit rounded-md border border-emerald-300 px-6 py-3 font-mono text-emerald-300 transition ease-linear hover:bg-emerald-100 hover:bg-opacity-10 focus-visible:bg-emerald-100 focus-visible:bg-opacity-10 focus-visible:outline-none"
      >
        Say Hi 👋
      </a>
      <ul className={classes.contactsUl}>
        <li>
          {/* <Tooltip
              TransitionComponent={Zoom}
              title="Mail to Abhishek Ramasubramanian"
              arrow
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abhishek.ram0901@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mail to Abhishek Ramasubramanian"
                style={{ color: '#E94034' }}
              >
                <EmailIcon style={{ fontSize: 30 }} />
              </a>
            </Tooltip> */}
        </li>
        <li>
          {/* <Tooltip
              TransitionComponent={Zoom}
              title="Reach Abhishek Ramasubramanian on LinkedIn"
              arrow
            >
              <a
                href="https://www.linkedin.com/in/abhishek-ramasubramanian/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reach Abhishek Ramasubramanian on LinkedIn"
                style={{ color: '#0A66C2' }}
              >
                <LinkedInIcon style={{ fontSize: 30 }} />
              </a>
            </Tooltip> */}
        </li>
        <li>
          {/* <Tooltip
              TransitionComponent={Zoom}
              title="Reach Abhishek Ramasubramanian on GitHub"
              arrow
            >
              <a
                href="https://github.com/Abhishek-R09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reach Abhishek Ramasubramanian on GitHub"
                className={localClasses.githubColor}
              >
                <GitHubIcon style={{ fontSize: 30 }} />
              </a>
            </Tooltip> */}
        </li>
        <li>
          {/* <Tooltip
              TransitionComponent={Zoom}
              title="Reach Abhishek Ramasubramanian on Twitter"
              arrow
            >
              <a
                href="https://twitter.com/abhishekR_09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reach Abhishek Ramasubramanian on Twitter"
                style={{ color: '#1DA1F2' }}
              >
                <TwitterIcon style={{ fontSize: 30 }} />
              </a>
            </Tooltip> */}
        </li>
      </ul>
      {/* <small>Feel free to contact me 🙂</small>{' '} */}
      {/* <small>
        Credits to{' '}
        <a
          className={localClasses.credits}
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/@martenbjork"
        >
          Marten Bjork
        </a>{' '}
        for the intro image
      </small> */}
    </footer>
  );
};

export default ContactMe;
