import { FunctionComponent } from 'react'
import { classNames } from '../../../../../../helpers/classNames'
import { jetBrainsMonoRegular } from '../../../../../../helpers/fonts'

interface BottomProps {
  index: number
  techUsed: string[]
}

const Bottom: FunctionComponent<BottomProps> = ({ index, techUsed }) => {
  return (
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
            'mb-1 mr-1 text-amber-300 selection:bg-amber-200 selection:text-amber-800',
            jetBrainsMonoRegular.className
          )}
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}

export default Bottom
