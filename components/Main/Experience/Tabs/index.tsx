import { useState } from 'react'
import { classNames } from '../../../../helpers/classNames'
import { jetBrainsMonoRegular } from '../../../../helpers/fonts'
import TabPanel from '../TabPanel'
import Tab from './Tab'

const Tabs = () => {
  const experiences = [
    {
      organization: 'Morgan Stanley',
      position: 'Technology Spring Analyst Intern',
      from: 'January 2023',
      to: 'July 2023',
      description: [`ABC`, `DEF`, `GHI`],
    },
    {
      organization: 'Fiserv',
      position: 'Technology - Summer Intern',
      from: 'July 2022',
      to: 'August 2022',
      description: [`ABC`, `DEF`, `GHI`],
    },
    {
      organization: 'FindMind Analytics',
      position: 'Frontend Intern',
      from: 'December 2020',
      to: 'February 2021',
      description: [`ABC`, `DEF`, `GHI`],
    },
  ]

  const [currTab, setCurrTab] = useState(0)

  const handleClick = (index: number) => setCurrTab(index)

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="relative mb-2 w-full overflow-x-auto sm:mb-0 sm:grow sm:basis-1/3">
        <div className="absolute top-11 left-0 z-10 w-full sm:top-0 sm:left-0 sm:h-full sm:w-1">
          <div
            className={classNames(
              ' bg-emerald-300 transition-all',
              'h-1 w-44 sm:ml-0 sm:h-12 sm:w-1',
              currTab == 0
                ? 'ml-0 sm:mt-0'
                : currTab == 1
                ? 'ml-176 sm:mt-12'
                : `ml-352 sm:mt-24`
            )}
          ></div>
        </div>
        <ul
          role="tablist"
          aria-label="List of tabs"
          className={classNames(
            'relative z-0 flex w-full min-w-max text-xs sm:w-fit sm:flex-col sm:text-base',
            jetBrainsMonoRegular.className
          )}
        >
          {experiences.map((experience, index) => (
            <Tab
              key={`tab-${experience.organization}-${index}`}
              index={index}
              currTab={currTab}
              organization={experience.organization}
              handleChange={handleClick}
            />
          ))}
        </ul>
      </div>
      <div className="w-full sm:grow sm:basis-1/2 md:basis-1/2 lg:basis-2/3">
        {experiences.map((experience, index) => (
          <TabPanel
            key={`tabpanel-${experience.organization}-${index}`}
            currTab={currTab}
            position={experience.position}
            organization={experience.organization}
            from={experience.from}
            to={experience.to}
            description={experience.description}
            tabIndex={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Tabs
