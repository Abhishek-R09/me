import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import DesktopNavigationLink from './DesktopNavigationLink'
import MobileNavigationLink from './MobileNavLink'
import whiteLogo from '../../public/static/svg/logo-color.svg'
import Image from 'next/image'
import { useState } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { classNames } from '../../helpers/classNames'

const navigation = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact-me' },
]

const NavigationBar = () => {
  // const [hState, sethState] = useState('top');
  const [open, setOpen] = useState(false)
  const scrollPosition = useScrollPosition()

  // useEffect(() => {
  //   var lastVal = 0;
  //   window.onscroll = function () {
  //     let y = window.scrollY;
  //     if (y > lastVal) {
  //       sethState('up');
  //     }
  //     if (y < lastVal) {
  //       sethState('down');
  //     }
  //     if (y === 0) {
  //       sethState('top-0');
  //     }
  //     lastVal = y;
  //   };
  // }, []);

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <div
        className={classNames(
          'fixed z-30 flex h-16 w-full items-center bg-slate-900 bg-opacity-80 px-3 py-2 shadow-black backdrop-blur transition-all xsm:px-6 md:px-20 lg:px-32',
          scrollPosition > 0 ? 'shadow-md' : 'shadow-none'
        )}
      >
        <div className="flex items-center justify-center md:flex-1 md:items-stretch md:justify-between">
          <button
            className="h-12 w-12 rounded-full p-1 hover:bg-slate-700 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-emerald-300"
            onClick={() => scrollToSection('home')}
          >
            <Image src={whiteLogo} alt="Logo" className="rounded-full" />
          </button>
          <div className="hidden md:ml-6 md:block">
            <div className="flex h-full items-center space-x-4">
              {navigation.map((item) => (
                <DesktopNavigationLink
                  key={item.name}
                  href={item.href}
                  name={item.name}
                  scrollFunc={scrollToSection}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        className={classNames(
          'fixed right-3 top-2 z-50 rounded-md p-2 text-gray-400 transition-all hover:bg-slate-700 hover:text-emerald-300 focus-visible:text-emerald-300 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-emerald-300 xsm:right-6 md:hidden'
          // hState == 'up' && !open ? '-top-20' : 'top-2'
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
        )}
      </button>
      <aside
        className={classNames(
          'fixed z-40 flex h-screen w-full transition-all md:hidden',
          open ? 'right-0' : '-right-full'
        )}
        hidden={open ? false : true}
      >
        <div className="h-screen w-2/5 bg-slate-900 bg-opacity-30 backdrop-blur"></div>
        <div className="ml-auto h-full w-3/5 rounded-l-lg bg-slate-900 px-2 pt-20 pb-3 shadow-xl shadow-black">
          {navigation.map((item) => (
            <MobileNavigationLink
              key={item.name}
              href={item.href}
              name={item.name}
              scrollFunc={scrollToSection}
              close={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            />
          ))}
        </div>
      </aside>
    </nav>
  )
}

export default NavigationBar
