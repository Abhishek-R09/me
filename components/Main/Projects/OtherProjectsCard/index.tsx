import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { classNames } from '../../../../helpers/classNames'
import {
  jetBrainsMonoRegular,
  RubikBold,
  RubikRegular,
} from '../../../../helpers/fonts'
import { listUserReposResponse } from '../../../../pages'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

type OtherProjectsCardProps = {
  name: listUserReposResponse['name']
  html_url: listUserReposResponse['html_url']
  language: listUserReposResponse['language']
  description: listUserReposResponse['description']
  homepage: listUserReposResponse['homepage']
}

const OtherProjectsCard = ({
  name,
  html_url,
  language,
  description,
  homepage,
}: OtherProjectsCardProps) => {
  return (
    <motion.li
      className="flex flex-col justify-start gap-2 rounded-md bg-slate-800 p-4 shadow-md"
      initial="init"
      whileInView="inview"
      transition={{ type: 'tween', ease: 'easeInOut' }}
      viewport={{ once: true }}
      variants={{ init: { opacity: 0, y: 100 }, inview: { opacity: 1, y: 0 } }}
      whileHover={{
        translateY: -10,
      }}
      whileTap={{
        translateY: -10,
      }}
    >
      <div className="flex items-baseline gap-2">
        <h3
          className={classNames(
            'text-lg text-amber-300 selection:bg-amber-200 selection:text-amber-900',
            RubikBold.className
          )}
        >
          {name}
        </h3>
        {homepage && (
          <a
            href={homepage}
            title={`Link to homepage of the project - '${name}'`}
            target={'_blank'}
            className="rounded-md px-2 py-1 text-amber-100 outline-none transition-all hover:text-amber-200 focus-visible:bg-amber-100 focus-visible:bg-opacity-10 focus-visible:text-amber-200 focus-visible:outline-none"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-base md:text-lg lg:text-xl"
            />
          </a>
        )}
      </div>
      <p className={classNames('text-amber-100', RubikRegular.className)}>
        {description}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <p
          className={classNames(
            'mb-1 mr-3 text-amber-200 last:mr-0',
            jetBrainsMonoRegular.className
          )}
        >
          {language}
        </p>
        <a
          href={html_url}
          title={`Link to GitHub repository of ${name}`}
          target={'_blank'}
          className="-ml-2 inline-block rounded-md p-2 text-amber-100 outline-none transition-all hover:text-amber-200 focus-visible:bg-amber-100 focus-visible:bg-opacity-10 focus-visible:text-amber-200 focus-visible:outline-none"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </a>
      </div>
    </motion.li>
  )
}

export default OtherProjectsCard
