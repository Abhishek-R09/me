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
        'fixed right-3 top-2 z-50 h-12 w-12 rounded-md p-2 text-gray-400 hover:bg-slate-700 hover:text-emerald-300 focus-visible:text-emerald-300 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-emerald-300 xsm:right-6 md:hidden'
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
