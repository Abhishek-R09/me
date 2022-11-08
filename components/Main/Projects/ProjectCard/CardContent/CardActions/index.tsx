import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent } from 'react'

interface CardActionsProps {
  projLink: string
  projName: string
}

const CardActions: FunctionComponent<CardActionsProps> = ({
  projLink,
  projName,
}) => {
  return (
    <a
      href={projLink}
      title={`Link to GitHub repository of ${projName}`}
      target={'_blank'}
      className="-ml-2 inline-block rounded-md p-2 text-sky-200 transition-all hover:text-amber-300 focus-visible:bg-amber-200 focus-visible:bg-opacity-10 focus-visible:text-amber-300 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-amber-300"
    >
      <FontAwesomeIcon icon={faGithub} className="text-2xl" />
    </a>
  )
}

export default CardActions
