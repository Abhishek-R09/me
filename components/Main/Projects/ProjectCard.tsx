import React from 'react'
import Image from 'next/legacy/image'
import { classNames } from '../../../helpers/classNames'
import {
  jetBrainsMonoRegular,
  RubikBold,
  RubikRegular,
} from '../../../helpers/fonts'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

type ProjectCardProps = {
  imgUrl: string
  imgTitle: string
  projName: string
  type: string
  projLink: string
  projDesc: string
  techUsed: string[]
  index: number
}

const ProjectCard = ({
  imgUrl,
  imgTitle,
  projName,
  type,
  projLink,
  projDesc,
  techUsed,
  index,
}: ProjectCardProps) => {
  return (
    <motion.li
      className="relative mb-5 grid grid-cols-12 grid-rows-6 items-center gap-2 last:mb-0 lg:mb-10"
      initial="init"
      whileInView="inview"
      transition={{ type: 'tween', ease: 'easeInOut' }}
      viewport={{ once: true }}
      variants={{ init: { opacity: 0, x: -100 }, inview: { opacity: 1, x: 0 } }}
    >
      <motion.div
        className={classNames(
          'relative z-20 col-span-full row-span-full p-5',
          index % 2 == 0
            ? 'md:col-span-full md:col-start-5 md:items-end md:text-right lg:col-start-6'
            : 'md:col-end-9 md:even:col-start-1 lg:col-end-8'
        )}
      >
        <p
          className={classNames(
            'mb-1 text-emerald-300',
            jetBrainsMonoRegular.className
          )}
        >
          Featured
        </p>
        <h3
          className={classNames('mb-3 text-lg text-slate-300', RubikBold.className)}
        >
          {projName}
        </h3>
        <p
          className={classNames(
            'mb-3 rounded-md text-slate-400',
            RubikRegular.className,
            'md:bg-slate-800 md:p-5'
          )}
        >
          {projDesc}
        </p>
        <ul
          className={classNames(
            'flex list-none flex-wrap',
            index % 2 == 0 ? 'md:justify-end' : 'md:justify-start'
          )}
        >
          {techUsed.map((tech) => (
            <li
              key={tech}
              className={classNames(
                'mb-1 mr-1 text-slate-400',
                jetBrainsMonoRegular.className
              )}
            >
              {tech}
            </li>
          ))}
        </ul>
        <a
          href="/"
          className="-ml-2 inline-block rounded-md p-2 text-slate-300 transition-all hover:text-emerald-300 focus:outline-dashed focus:outline-1 focus:outline-emerald-300"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </a>
      </motion.div>
      <div
        className={classNames(
          'xllg:row-span-full z-10 col-span-full row-span-full h-full rounded-md bg-emerald-300 opacity-5 transition-all md:row-start-2 md:row-end-6 md:opacity-40 md:hover:bg-transparent md:hover:opacity-100',
          index % 2 == 0
            ? 'md:col-start-1 md:col-end-9 lg:col-end-8'
            : 'md:col-span-full md:col-start-5 lg:col-start-6'
        )}
      >
        <div className="relative h-full w-full rounded-md mix-blend-multiply">
          <Image
            src={`${imgUrl}`}
            alt={imgTitle}
            title={imgTitle}
            layout="fill"
            objectFit="cover"
            objectPosition="0 0"
            className="rounded-md"
          />
        </div>
      </div>
    </motion.li>
  )
}

export default ProjectCard
