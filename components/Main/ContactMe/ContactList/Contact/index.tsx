import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'

interface ContactProps {
  icon: JSX.Element
  link: string
  label: string
  stiffness: number
}

const Contact: FunctionComponent<ContactProps> = ({
  icon,
  link,
  label,
  stiffness,
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 100 }}
      animate="start"
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="flex rounded-md p-2 text-amber-100 outline-none transition-colors hover:text-amber-200 focus-visible:bg-amber-100 focus-visible:bg-opacity-10 focus-visible:text-amber-200 focus-visible:outline-none"
      >
        {icon}
      </a>
    </motion.li>
  )
}

export default Contact
