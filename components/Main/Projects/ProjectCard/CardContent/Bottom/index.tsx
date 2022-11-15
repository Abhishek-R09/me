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
        'mb-2 flex list-none flex-wrap gap-x-6 gap-y-2',
        index % 2 == 0 ? 'md:justify-end' : 'md:justify-start'
      )}
    >
      {techUsed.map((tech) => (
        <li
          key={tech}
          className={classNames(
            'text-amber-200 last:mr-0',
            jetBrainsMonoRegular.className
            // index % 2 == 0 ? 'ml-6 last:ml-0' : 'mr-6 last:mr-0'
          )}
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}

export default Bottom
