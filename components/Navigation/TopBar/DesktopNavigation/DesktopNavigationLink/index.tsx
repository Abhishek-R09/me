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
        'text-slate-400 transition-colors hover:bg-slate-700 hover:bg-opacity-40 hover:text-emerald-300 focus-visible:text-emerald-300 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-emerald-300',
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
