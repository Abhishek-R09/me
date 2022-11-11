import { classNames } from '../../../../helpers/classNames'
import { RubikRegular } from '../../../../helpers/fonts'
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
        'w-full text-amber-100 transition-colors hover:bg-amber-200 hover:bg-opacity-10 hover:text-amber-300',
        'block rounded-md px-3 py-2 text-base font-medium focus-visible:text-amber-300 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-amber-300',
        RubikRegular.className
      )}
      tabIndex={tabIndex}
      onClick={(e) => {
        scrollFunc(href)
        close()
        return e
      }}
      variants={variants}
      type="button"
    >
      {name}
    </motion.button>
  )
}

export default MobileNavigationLink
