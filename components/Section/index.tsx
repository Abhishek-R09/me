import { motion, Variants } from 'framer-motion'

type SectionPropTypes = {
  children: React.ReactNode
  id: string
}

const Section = ({ children, id }: SectionPropTypes) => {
  return (
    <motion.section id={id} className="m-auto pt-24 xl:max-w-4xl">
      {children}
    </motion.section>
  )
}

export default Section
