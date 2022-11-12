import { FunctionComponent } from 'react'
import { classNames } from '../../helpers/classNames'

interface ExternalLinkProps {
  link: string
  text: string
  classes?: string
}

const ExternalLink: FunctionComponent<ExternalLinkProps> = ({
  link,
  text,
  classes = '',
}) => {
  return (
    <a
      className={classNames(
        'relative inline-block text-amber-400 transition-colors after:relative after:block after:h-px after:w-0 after:bg-amber-500 after:transition-all hover:cursor-pointer hover:text-amber-500 hover:after:w-full focus-visible:text-amber-500 focus-visible:outline-none focus-visible:after:w-full',
        classes
      )}
      href={link}
      target="_blank"
    >
      {text}
    </a>
  )
}

export default ExternalLink
