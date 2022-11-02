import React from 'react';
import { classNames } from '../../../helpers/classNames';
import { jetBrainsMonoRegular, RubikRegular } from '../../../helpers/fonts';
import MainHeadings from '../../Heading';
import GitHubLogo from '../../UI/GitHubLogo';
import LinkedInLogo from '../../UI/LinkedInLogo';
import TwitterLogo from '../../UI/TwitterLogo';

const ContactMe = () => {
  return (
    <footer
      id="contact-me"
      className="m-auto mt-20 max-w-4xl pb-20 md:relative"
    >
      <MainHeadings
        title="Get In Touch"
        otherClasses="grow basis-1/2 before:grow before:basis-1/5 after:grow after:basis-1/5"
      />
      <p className={classNames('mb-10 text-slate-400', RubikRegular.className)}>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a
        href="mailto:abhishek.ramasubramanian@gmail.com"
        className={classNames(
          'b-1 mx-auto mt-3 block w-fit rounded-md border border-emerald-300 px-6 py-3 text-emerald-300 transition ease-linear hover:bg-emerald-100 hover:bg-opacity-10 focus-visible:bg-emerald-100 focus-visible:bg-opacity-10 focus-visible:outline-none',
          jetBrainsMonoRegular.className
        )}
      >
        Say Hi 👋
      </a>
      <ul className="mt-8 flex w-full items-center justify-center gap-6 md:fixed md:bottom-0 md:left-6 md:mt-0 md:w-12 md:flex-col md:after:h-10 md:after:w-px md:after:bg-slate-400 lg:left-8 lg:w-16">
        <li className="">
          <a
            href="https://www.linkedin.com/in/abhishek-ramasubramanian/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reach Abhishek Ramasubramanian on LinkedIn"
          >
            <LinkedInLogo fill="text-2xl fill-slate-300 hover:fill-emerald-300" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Abhishek-R09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reach Abhishek Ramasubramanian on GitHub"
          >
            <GitHubLogo fill="text-2xl fill-slate-300 hover:fill-emerald-300" />
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
            <TwitterLogo fill="text-2xl fill-slate-300 hover:fill-emerald-300" />
          </a>
        </li>
      </ul>
      {/* <div className="hidden md:fixed md:right-6 md:bottom-0 md:flex md:w-12 md:flex-col md:items-center md:after:h-10 md:after:w-px md:after:bg-slate-400">
        <a
          href="mailto:abhishek.ramasubramanian@gmail.com"
          className="text-slate-300 md:relative md:left-px md:-translate-y-36 md:rotate-90 md:hover:text-emerald-300"
        >
          abhishek.ramasubramanian@gmail.com
        </a>
      </div> */}
    </footer>
  );
};

export default ContactMe;
