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
        id={`experience-tab-${index}`}
        aria-selected={index == currTab}
        aria-controls={`tab-panel-${index}`}
        className={classNames(
          'h-12 w-44 min-w-max rounded-t-md border-slate-400 text-center focus-visible:border-2 focus-visible:border-dashed focus-visible:border-emerald-300 focus-visible:outline-none sm:w-full sm:rounded-t-none sm:rounded-r-md sm:border-l-2 sm:border-b-0 sm:text-left',
          index == currTab
            ? 'border-b-0 bg-slate-700 bg-opacity-40 text-emerald-300'
            : 'border-b-2 text-slate-400',
          'py-3 px-4 hover:cursor-pointer hover:bg-slate-700 hover:bg-opacity-40 hover:text-emerald-300'
        )}
        onClick={() => handleChange(index)}
      >
        {organization}
      </button>
    </motion.li>
  )
}

export default Tab
