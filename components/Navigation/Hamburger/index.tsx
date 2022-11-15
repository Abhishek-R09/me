import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'
import { classNames } from '../../../helpers/classNames'

interface HamburgerProps {
  open: boolean
  handleSidebar: () => void
}

const Hamburger: FunctionComponent<HamburgerProps> = ({ open, handleSidebar }) => {
  return (
    <motion.button
      className={classNames(
        'fixed right-3 top-2 z-50 h-12 w-12 rounded-md p-2 text-amber-200 outline-none hover:bg-amber-200 hover:bg-opacity-10 hover:text-amber-300 focus-visible:bg-amber-200 focus-visible:bg-opacity-10 focus-visible:text-amber-300 focus-visible:outline-none xsm:right-6 md:hidden'
      )}
      type="button"
      onClick={handleSidebar}
      initial={{ opacity: 0, y: -100 }}
      animate="start"
      variants={{
        start: { opacity: 1, y: 0 },
      }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
      )}
    </motion.button>
  )
}

export default Hamburger
