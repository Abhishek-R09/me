import React, { useState } from 'react'
import MainHeadings from '../../Heading'
import { classNames } from '../../../helpers/classNames'
import {
  jetBrainsMonoRegular,
  RubikBold,
  RubikRegular,
} from '../../../helpers/fonts'
import Section from '../../Section'
import { motion } from 'framer-motion'

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

const Experience = () => {
  const [currTab, setCurrTab] = useState(0)

  return (
    <Section id="experience">
      <MainHeadings title="Experience" />
      <div className="flex flex-col sm:flex-row">
        <div className="relative m-2 h-fit w-full overflow-x-auto sm:grow sm:basis-1/3">
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
            className={classNames(
              'relative z-0 flex w-full min-w-max text-xs sm:w-fit sm:flex-col sm:text-base',
              jetBrainsMonoRegular.className
            )}
          >
            {experiences.map((experience, index) => (
              <motion.li
                key={`${experience.organization}${index}`}
                initial={{ opacity: 0, x: -100 }}
                transition={{ type: 'tween', ease: 'easeInOut' }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <button
                  className={classNames(
                    'mb-px h-12 w-44 min-w-max rounded-t-md border-slate-400 text-center focus-visible:border-2 focus-visible:border-dashed focus-visible:border-emerald-300 focus-visible:outline-none sm:w-full sm:rounded-t-none sm:rounded-r-md sm:border-l-2 sm:border-b-0 sm:text-left',
                    index == currTab
                      ? 'border-b-0 bg-slate-700 bg-opacity-40 text-emerald-300'
                      : 'border-b-2 text-slate-400',
                    'py-3 px-4 hover:cursor-pointer hover:bg-slate-700 hover:bg-opacity-40 hover:text-emerald-300'
                  )}
                  onClick={() => setCurrTab(index)}
                >
                  {experience.organization}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="w-full p-4 sm:grow sm:basis-1/2 md:basis-1/2 lg:basis-2/3">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.organization}${index}`}
              hidden={index !== currTab}
              animate={currTab !== index ? 'closed' : 'open'}
              transition={{ type: 'tween', ease: 'easeInOut' }}
              variants={{
                open: { opacity: 1, x: 0 },
                closed: { opacity: 0, x: 100 },
              }}
            >
              <h3
                className={classNames(
                  'mb-1 text-lg text-slate-300',
                  RubikBold.className
                )}
              >
                {experience.position}
              </h3>
              <h4
                className={classNames(
                  'mb-2 text-lg text-emerald-300',
                  RubikBold.className
                )}
              >
                {experience.organization}
              </h4>
              <p
                className={classNames(
                  'mb-2 text-sm text-slate-400',
                  jetBrainsMonoRegular.className
                )}
              >
                {experience.from} - {experience.to}
              </p>
              <div>
                <ul className={classNames('text-slate-400', RubikRegular.className)}>
                  {experience.description.map((desc) => (
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
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Experience
