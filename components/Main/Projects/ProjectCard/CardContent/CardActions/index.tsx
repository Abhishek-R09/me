import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent } from 'react'
import { classNames } from '../../../../../../helpers/classNames'

interface CardActionsProps {
  projLink: string
  projName: string
  website: string | null
  index: number
}

const CardActions: FunctionComponent<CardActionsProps> = ({
  projLink,
  projName,
  website,
  index,
}) => {
  return (
    <div
      className={classNames(
        'flex gap-3',
        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
      )}
    >
      <a
        href={projLink}
        title={`Link to GitHub repository of ${projName}`}
        aria-label={`Link to GitHub repository of ${projName}`}
        target={'_blank'}
        className="-ml-2 inline-block rounded-md p-2 text-amber-100 outline-none transition-all hover:text-amber-200 focus-visible:bg-amber-100 focus-visible:bg-opacity-10 focus-visible:text-amber-200 focus-visible:outline-none"
      >
        <FontAwesomeIcon icon={faGithub} className="text-2xl" />
      </a>
      {website && (
        <a
          href={website}
          title={`Link to homepage of ${projName}`}
          target={'_blank'}
          className="-ml-2 inline-block rounded-md p-2 text-amber-100 outline-none transition-all hover:text-amber-200 focus-visible:bg-amber-100 focus-visible:bg-opacity-10 focus-visible:text-amber-200 focus-visible:outline-none"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-2xl" />
        </a>
      )}
    </div>
  )
}

export default CardActions
