import { motion } from 'framer-motion'
import Content from './Content'
import Skills from './Skills'

const Left = () => {
  return (
    <motion.div
      className="md:basis-1/2 lg:basis-3/5"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: 'tween', ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <Content />
      <Skills />
    </motion.div>
  )
}

export default Left
