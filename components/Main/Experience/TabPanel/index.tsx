import { motion } from 'framer-motion'
import React from 'react'
import { classNames } from '../../../../helpers/classNames'
import {
  jetBrainsMonoRegular,
  RubikBold,
  RubikRegular,
} from '../../../../helpers/fonts'
import ExternalLink from '../../../ExternalLink'

type TabPanelProps = {
  currTab: number
  tabIndex: number
  position: string
  organization: string
  from: string
  to: string
  description: string[]
  organizationLink: string
}

const TabPanel = ({
  currTab,
  tabIndex,
  position,
  organization,
  from,
  to,
  description,
  organizationLink,
}: TabPanelProps) => (
  <motion.div
    role="tabpanel"
    id={`tabpanel-${tabIndex}`}
    aria-labelledby={`tabpanel-${tabIndex}`}
    tabIndex={0}
    hidden={tabIndex !== currTab}
    animate={currTab !== tabIndex ? 'closed' : 'open'}
    transition={{ type: 'tween', ease: 'easeInOut' }}
    variants={{
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: -100 },
    }}
    className="p-2 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-amber-300 xsm:p-4"
  >
    <h3 className={classNames('mb-1 text-lg text-amber-200', RubikBold.className)}>
      {position}
    </h3>
    <h4
      className={classNames(
        'mb-2 text-lg text-amber-300 selection:bg-amber-200 selection:text-amber-900',
        RubikBold.className
      )}
    >
      <ExternalLink text={organization} link={organizationLink} />
    </h4>
    <p
      className={classNames(
        'mb-2 text-sm text-amber-100',
        jetBrainsMonoRegular.className
      )}
    >
      {from} - {to}
    </p>
    <div>
      <ul className={classNames(RubikRegular.className)}>
        {description.map((desc) => (
          <li
            key={desc}
            className="relative mb-2 pl-7 text-amber-100 before:absolute before:left-0 before:text-amber-300 before:content-['→']"
          >
            {desc}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
)

export default TabPanel
