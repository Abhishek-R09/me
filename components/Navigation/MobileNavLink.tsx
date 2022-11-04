import { classNames } from '../../helpers/classNames'
import { RubikRegular } from '../../helpers/fonts'
import { motion } from 'framer-motion'

type MobileNavigationLinkProps = {
  href: string
  name: string
  close: Function
  scrollFunc: Function
  tabIndex: number
}

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 100 },
    },
  },
}

const MobileNavigationLink = ({
  href,
  name,
  close,
  scrollFunc,
  tabIndex,
}: MobileNavigationLinkProps) => {
  return (
    <motion.button
      className={classNames(
        'w-full text-slate-400 hover:bg-gray-600 hover:text-emerald-300',
        'block rounded-md px-3 py-2 text-base font-medium focus-visible:text-emerald-300 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-emerald-300',
        RubikRegular.className
      )}
      tabIndex={tabIndex}
      onClick={(e) => {
        scrollFunc(href)
        close()
        return e
      }}
      variants={variants}
    >
      {name}
    </motion.button>
  )
}

export default MobileNavigationLink
