import { motion } from 'framer-motion'
import React, { FunctionComponent } from 'react'
import { classNames } from '../../../../../helpers/classNames'

interface TabProps {
  index: number
  currTab: number
  organization: string
  handleChange: (index: number) => void
  tabRef?: React.LegacyRef<HTMLButtonElement>
}

const Tab: FunctionComponent<TabProps> = ({
  index,
  currTab,
  organization,
  handleChange,
}) => {
  return (
    <motion.li
      role="presentation"
      initial={{ opacity: 0, x: -100 }}
      transition={{ type: 'tween', ease: 'easeInOut' }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <button
        type="button"
        role="tab"
        id={`tab-${index}`}
        aria-selected={index === currTab}
        aria-controls={`tabpanel-${index}`}
        className={classNames(
          'h-12 w-44 min-w-max rounded-t-md border-sky-200 text-center focus-visible:border-2 focus-visible:border-dashed focus-visible:border-amber-300 focus-visible:bg-amber-200 focus-visible:bg-opacity-10 focus-visible:text-amber-300 focus-visible:outline-none sm:w-full sm:rounded-t-none sm:rounded-r-md sm:border-l-2 sm:border-b-0 sm:text-left',
          index == currTab
            ? 'border-b-0 bg-amber-200 bg-opacity-10 text-amber-300 selection:bg-amber-200 selection:text-amber-800'
            : 'border-b-2 text-sky-300 selection:bg-slate-200 selection:text-slate-800',
          'py-3 px-4 hover:cursor-pointer hover:bg-amber-200 hover:bg-opacity-10 hover:text-amber-300'
        )}
        onClick={() => handleChange(index)}
      >
        {organization}
      </button>
    </motion.li>
  )
}

export default Tab
