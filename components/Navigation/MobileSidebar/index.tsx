import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'
import { navigationType } from '..'
import { classNames } from '../../../helpers/classNames'
import MobileNavigationLink from './MobileNavLink'

interface MobileSidebarProps {
  open: boolean
  navigation: navigationType[]
  scrollToSection: (section: string) => void
  closeSidebar: () => void
}

const variants = {
  open: { x: 0 },
  closed: { x: '100%' },
}

const ulvariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const MobileSidebar: FunctionComponent<MobileSidebarProps> = ({
  open,
  navigation,
  scrollToSection,
  closeSidebar,
}) => {
  return (
    <motion.aside
      className={classNames(
        'fixed z-40 flex h-screen w-full backdrop-blur-sm md:hidden'
      )}
      hidden={open ? false : true}
      animate={open ? 'open' : 'closed'}
      variants={variants}
      transition={{ type: 'tween', ease: 'easeInOut' }}
    >
      {/* <motion.div
        className="h-screen w-2/5 bg-slate-900 bg-opacity-30 backdrop-blur"
        animate={open ? 'open' : 'closed'}
      ></motion.div> */}
      <motion.div
        className="ml-auto h-full w-3/5 rounded-l-lg bg-slate-900 px-2 pt-20 pb-3 shadow-xl shadow-black"
        variants={ulvariants}
      >
        {navigation.map((item) => (
          <MobileNavigationLink
            key={item.name}
            href={item.href}
            name={item.name}
            scrollFunc={scrollToSection}
            close={closeSidebar}
            tabIndex={open ? 0 : -1}
          />
        ))}
      </motion.div>
    </motion.aside>
  )
}

export default MobileSidebar
