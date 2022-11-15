import React from 'react'
import { classNames } from '../../../helpers/classNames'
import { RubikRegular } from '../../../helpers/fonts'
import MainHeadings from '../../Heading'
import { motion } from 'framer-motion'
import ContactList from './ContactList'
import MailLink from './MailLink'

const ContactMe = () => {
  return (
    <footer id="contact-me" className="m-auto max-w-4xl pt-24 pb-20 md:relative">
      <MainHeadings
        title="Let's Connect"
        otherClasses="grow basis-1/2 before:grow before:basis-1/5 after:grow after:basis-1/5"
      />
      <motion.p
        className={classNames('mb-10 text-amber-100', RubikRegular.className)}
        initial={{ opacity: 0, y: 100 }}
        transition={{ type: 'tween', ease: 'easeInOut' }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {`Reach out to me by clicking on the below link through email or social IDs. Feel free to contact me for any discussion or new ideas. My inbox remains open for the same. I'll do my best to revert.`}
      </motion.p>
      <MailLink text="Say Hi" link="mailto:abhishek.ramasubramanian@gmail.com" />
      <ContactList />
    </footer>
  )
}

export default ContactMe
