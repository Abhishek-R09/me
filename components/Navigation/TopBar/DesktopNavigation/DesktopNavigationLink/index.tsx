import { classNames } from '../../../../../helpers/classNames'
import { RubikRegular } from '../../../../../helpers/fonts'
import { motion } from 'framer-motion'

type DesktopNavigationLinkProps = {
  href: string
  name: string
  scrollFunc: Function
}

const DesktopNavigationLink = ({
  href,
  name,
  scrollFunc,
}: DesktopNavigationLinkProps) => {
  return (
    <motion.button
      onClick={() => scrollFunc(href)}
      type="button"
      className={classNames(
        'text-amber-100 outline-none transition-colors hover:bg-amber-200 hover:bg-opacity-10 hover:text-amber-300 focus-visible:bg-amber-200 focus-visible:bg-opacity-10 focus-visible:text-amber-300 focus-visible:outline-none lg:text-lg',
        'rounded-md px-3 py-2 text-base font-medium hover:cursor-pointer',
        RubikRegular.className
      )}
      initial={{ opacity: 0, x: 100 }}
      animate="start"
      variants={{
        start: { opacity: 1, x: 0 },
      }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {name}
    </motion.button>
  )
}

export default DesktopNavigationLink
