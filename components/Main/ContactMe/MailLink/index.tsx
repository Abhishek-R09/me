import { FunctionComponent } from 'react'
import { classNames } from '../../../../helpers/classNames'
import { jetBrainsMonoRegular } from '../../../../helpers/fonts'

interface MailLinkProps {
  text: string
  link: string
  className?: string
}

const MailLink: FunctionComponent<MailLinkProps> = ({
  text,
  link,
  className = '',
}) => {
  return (
    <a
      href={link}
      target="_blank"
      aria-label="Mail to Abhishek Ramasubramanian"
      title="Mail to Abhishek Ramasubramanian"
      className={classNames(
        'b-1 mx-auto mt-3 block w-fit rounded-md border border-amber-300 px-6 py-3 text-amber-300 transition ease-linear selection:bg-amber-200 selection:text-amber-900 hover:bg-amber-200 hover:bg-opacity-10 focus-visible:bg-amber-100 focus-visible:bg-opacity-10 focus-visible:outline-none',
        jetBrainsMonoRegular.className,
        className
      )}
    >
      {text}
    </a>
  )
}

export default MailLink
