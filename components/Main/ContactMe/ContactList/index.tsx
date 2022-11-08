import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Contact from './Contact'

const contacts = [
  {
    icon: <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />,
    link: 'https://www.linkedin.com/in/abhishek-ramasubramanian/',
    label: 'Abhishek Ramasubramanian on LinkedIn',
    stiffness: 100,
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} className="text-2xl" />,
    link: 'https://github.com/Abhishek-R09',
    label: 'Abhishek Ramasubramanian on GitHub',
    stiffness: 75,
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} className="text-2xl" />,
    link: 'https://twitter.com/abhishekR_09',
    label: 'Abhishek Ramasubramanian on Twitter',
    stiffness: 50,
  },
]

const ContactList = () => {
  return (
    <ul className="mt-8 flex w-full items-center justify-center gap-6 md:fixed md:bottom-0 md:left-6 md:mt-0 md:w-12 md:flex-col md:after:h-10 md:after:w-px md:after:bg-amber-300 lg:left-8 lg:w-16">
      {contacts.map((contact) => (
        <Contact key={contact.label} {...contact} />
      ))}
    </ul>
  )
}

export default ContactList
