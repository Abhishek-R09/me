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
      className="-ml-2 inline-block rounded-md p-2 text-slate-300 transition-all hover:text-emerald-300 focus:outline-dashed focus:outline-1 focus:outline-emerald-300"
    >
      <FontAwesomeIcon icon={faGithub} className="text-2xl" />
    </a>
  )
}

export default CardActions
