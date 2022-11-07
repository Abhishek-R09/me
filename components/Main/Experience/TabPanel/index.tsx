import { motion } from 'framer-motion'
import React from 'react'
import { classNames } from '../../../../helpers/classNames'
import {
  jetBrainsMonoRegular,
  RubikBold,
  RubikRegular,
} from '../../../../helpers/fonts'

type TabPanelProps = {
  currTab: number
  tabIndex: number
  position: string
  organization: string
  from: string
  to: string
  description: string[]
}

const TabPanel = ({
  currTab,
  tabIndex,
  position,
  organization,
  from,
  to,
  description,
}: TabPanelProps) => (
  <motion.div
    role="tabpanel"
    id={`experience-tabpanel-${tabIndex}`}
    aria-labelledby={`tab-panel-${tabIndex}`}
    tabIndex={0}
    hidden={tabIndex !== currTab}
    animate={currTab !== tabIndex ? 'closed' : 'open'}
    transition={{ type: 'tween', ease: 'easeInOut' }}
    variants={{
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: -100 },
    }}
    className="p-2 focus:outline-dashed focus:outline-1 focus:outline-emerald-300 xsm:p-4"
  >
    <h3 className={classNames('mb-1 text-lg text-slate-300', RubikBold.className)}>
      {position}
    </h3>
    <h4 className={classNames('mb-2 text-lg text-emerald-300', RubikBold.className)}>
      {organization}
    </h4>
    <p
      className={classNames(
        'mb-2 text-sm text-slate-400',
        jetBrainsMonoRegular.className
      )}
    >
      {from} - {to}
    </p>
    <div>
      <ul className={classNames('text-slate-400', RubikRegular.className)}>
        {description.map((desc) => (
          <li
            key={desc}
            className="relative mb-2 pl-7 text-slate-400 before:absolute before:left-0 before:text-emerald-300 before:content-['▹']"
          >
            {desc}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
)

export default TabPanel
