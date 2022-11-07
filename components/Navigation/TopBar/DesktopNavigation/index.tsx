import { FunctionComponent } from 'react'
import { navigationType } from '../..'
import DesktopNavigationLink from './DesktopNavigationLink'

interface DesktopNavigationProps {
  scrollToSection: (section: string) => void
  navigation: navigationType[]
}

const DesktopNavigation: FunctionComponent<DesktopNavigationProps> = ({
  navigation,
  scrollToSection,
}) => {
  return (
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
  )
}

export default DesktopNavigation
