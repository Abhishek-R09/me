import { useState } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import MobileSidebar from './MobileSidebar'
import Hamburger from './Hamburger'
import TopBar from './TopBar'

export interface navigationType {
  name: string
  href: string
}

const navigation = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact-me' },
]

const NavigationBar = () => {
  const [open, setOpen] = useState(false)
  const scrollPosition = useScrollPosition()

  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  const closeSidebar = () => {
    setOpen(false)
  }

  const toggleSidebar = () => {
    setOpen((prev) => !prev)
  }

  return (
    <nav>
      <TopBar
        scrollPosition={scrollPosition}
        scrollToSection={scrollToSection}
        navigation={navigation}
      />
      <Hamburger open={open} handleSidebar={toggleSidebar} />
      <MobileSidebar
        open={open}
        navigation={navigation}
        closeSidebar={closeSidebar}
        scrollToSection={scrollToSection}
      />
    </nav>
  )
}

export default NavigationBar
