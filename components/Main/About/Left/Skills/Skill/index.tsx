import { FunctionComponent } from 'react'
import { classNames } from '../../../../../../helpers/classNames'
import { jetBrainsMonoRegular } from '../../../../../../helpers/fonts'

interface SkillProps {
  name: string
}

const Skill: FunctionComponent<SkillProps> = ({ name }) => {
  return (
    <li
      className={classNames(
        "relative mb-2 pl-4 text-sm text-slate-400 before:absolute before:left-0 before:text-emerald-300 before:content-['▹']",
        jetBrainsMonoRegular.className
      )}
      key={name}
    >
      {name}
    </li>
  )
}

export default Skill
