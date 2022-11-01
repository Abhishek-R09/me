import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import MainHeadings from '../../Heading';
import { classNames } from '../../../helpers/classNames';
import {
  jetBrainsMonoRegular,
  RubikBold,
  RubikRegular,
} from '../../../helpers/fonts';

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
];

const Experience = () => {
  const [currTab, setCurrTab] = useState(0);

  return (
    <>
      <section id="experience" className="mb-20">
        <MainHeadings title="Experience" />
        <div className="flex flex-col sm:flex-row">
          <div className="w-full overflow-x-auto sm:grow sm:basis-1/3">
            <ul
              className={classNames(
                'relative flex w-full sm:w-fit sm:flex-col',
                jetBrainsMonoRegular.className
              )}
            >
              {experiences.map((experience, index) => (
                <li
                  key={`${experience.organization}${index}`}
                  className={classNames(
                    'min-w-max rounded-t-md border-b-2 sm:rounded-t-none  sm:rounded-r-md sm:border-l-2 sm:border-b-0',
                    index == currTab
                      ? 'border-emerald-300 bg-slate-700 bg-opacity-40 text-emerald-300'
                      : 'border-slate-400 text-slate-400',
                    'py-3 px-4 hover:cursor-pointer hover:bg-slate-700 hover:bg-opacity-40 hover:text-emerald-300'
                  )}
                  onClick={() => setCurrTab(index)}
                >
                  {experience.organization}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full p-4 sm:grow sm:basis-1/2">
            {experiences.map((experience, index) => (
              <div
                key={`${experience.organization}${index}`}
                hidden={index !== currTab}
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
                  <ul
                    className={classNames(
                      'text-slate-400',
                      RubikRegular.className
                    )}
                  >
                    {experience.description.map((desc) => (
                      <li
                        key={desc}
                        className="relative mb-2 pl-7 text-slate-400 before:absolute before:left-0 before:text-emerald-300 before:content-['▹']"
                      >
                        {desc}
                      </li>
                    ))}
                    {/* <li>ABC</li>
                    <li>DEF</li>
                    <li>GHI</li> */}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
