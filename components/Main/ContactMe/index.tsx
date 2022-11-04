import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { classNames } from '../../../helpers/classNames'
import { jetBrainsMonoRegular, RubikRegular } from '../../../helpers/fonts'
import MainHeadings from '../../Heading'
import { motion } from 'framer-motion'

const ContactMe = () => {
  return (
    <footer id="contact-me" className="m-auto mt-20 max-w-4xl pb-20 md:relative">
      <MainHeadings
        title="Get In Touch"
        otherClasses="grow basis-1/2 before:grow before:basis-1/5 after:grow after:basis-1/5"
      />
      <motion.p
        className={classNames('mb-10 text-slate-400', RubikRegular.className)}
        initial={{ opacity: 0, y: 100 }}
        transition={{ type: 'tween', ease: 'easeInOut' }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Although I’m not currently looking for any new opportunities, my inbox is
        always open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </motion.p>
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
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          animate="start"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <a
            href="https://www.linkedin.com/in/abhishek-ramasubramanian/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reach Abhishek Ramasubramanian on LinkedIn"
            className="flex rounded-md p-2 text-slate-300 hover:text-emerald-300 focus:outline-dashed focus:outline-1 focus:outline-emerald-300"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          animate="start"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 75 }}
        >
          <a
            href="https://github.com/Abhishek-R09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reach Abhishek Ramasubramanian on GitHub"
            className="flex rounded-md p-2 text-slate-300 hover:text-emerald-300 focus:outline-dashed focus:outline-1 focus:outline-emerald-300"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          animate="start"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <a
            href="https://twitter.com/abhishekR_09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reach Abhishek Ramasubramanian on Twitter"
            className="flex rounded-md p-2 text-slate-300 hover:text-emerald-300 focus:outline-dashed focus:outline-1 focus:outline-emerald-300"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
        </motion.li>
      </ul>
    </footer>
  )
}

export default ContactMe
