import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'
import { classNames } from '../../../helpers/classNames'
import whiteLogo from '../../../public/static/svg/logo-color.svg'
import Image from 'next/image'
import { navigationType } from '..'
import DesktopNavigation from './DesktopNavigation'

interface TopBarProps {
  scrollPosition: number
  scrollToSection: (section: string) => void
  navigation: navigationType[]
}

const TopBar: FunctionComponent<TopBarProps> = ({
  scrollPosition,
  scrollToSection,
  navigation,
}) => {
  return (
    <div
      className={classNames(
        'fixed z-30 flex h-16 w-full items-center bg-slate-900 bg-opacity-80 px-3 py-2 shadow-black backdrop-blur transition-all xsm:px-6 md:px-20 lg:h-20 lg:px-32 xl:justify-center xl:px-40',
        scrollPosition > 0 ? 'shadow-md' : 'shadow-none'
      )}
    >
      <div className="flex items-center justify-center md:flex-1 md:items-stretch md:justify-between xl:max-w-6xl">
        <motion.button
          className="z-50 h-12 w-12 rounded-full p-1 outline-none transition-colors hover:bg-amber-200 hover:bg-opacity-50 focus-visible:bg-amber-200 focus-visible:bg-opacity-10 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-amber-300 lg:h-16 lg:w-16"
          onClick={() => scrollToSection('home')}
          type="button"
          initial={{ opacity: 0, x: -100 }}
          animate="start"
          variants={{
            start: { opacity: 1, x: 0 },
          }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Image src={whiteLogo} alt="Logo" className="rounded-full" />
        </motion.button>
        <DesktopNavigation
          navigation={navigation}
          scrollToSection={scrollToSection}
        />
      </div>
    </div>
  )
}

export default TopBar
