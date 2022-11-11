import { classNames } from '../../helpers/classNames'
import { RubikBold } from '../../helpers/fonts'
import { motion } from 'framer-motion'

type MainHeadingsType = {
  title: string
  otherClasses?: string
}

const MainHeadings = ({ title, otherClasses = '' }: MainHeadingsType) => {
  return (
    <motion.h2
      className={classNames(
        'relative mb-10 flex w-full items-center text-xl text-amber-200 before:relative before:mr-3 before:h-px before:w-full before:bg-amber-300 after:relative after:ml-3 after:h-px after:w-full after:bg-amber-300 lg:text-2xl xl:text-3xl',
        RubikBold.className,
        otherClasses
      )}
      initial={{ opacity: 0, y: 100 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'tween', ease: 'easeInOut' }}
    >
      {title}
    </motion.h2>
  )
}

export default MainHeadings
