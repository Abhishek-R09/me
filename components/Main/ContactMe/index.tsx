import React from 'react'
import { classNames } from '../../../helpers/classNames'
import { RubikRegular } from '../../../helpers/fonts'
import MainHeadings from '../../Heading'
import { motion } from 'framer-motion'
import ContactList from './ContactList'
import MailLink from './MailLink'

const ContactMe = () => {
  return (
    <footer id="contact-me" className="m-auto mt-20 max-w-4xl pb-20 md:relative">
      <MainHeadings
        title="Get In Touch"
        otherClasses="grow basis-1/2 before:grow before:basis-1/5 after:grow after:basis-1/5"
      />
      <motion.p
        className={classNames('mb-10 text-sky-200', RubikRegular.className)}
        initial={{ opacity: 0, y: 100 }}
        transition={{ type: 'tween', ease: 'easeInOut' }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Although I’m not currently looking for any new opportunities, my inbox is
        always open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </motion.p>
      <MailLink text="Say Hi" link="mailto:abhishek.ramasubramanian@gmail.com" />
      <ContactList />
    </footer>
  )
}

export default ContactMe
