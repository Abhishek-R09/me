import Skill from './Skill'
import { skills } from './skills'

const Skills = () => {
  return (
    <ul className="grid grid-cols-2 gap-2">
      {skills.map((skill) => (
        <Skill key={skill} name={skill} />
      ))}
    </ul>
  )
}

export default Skills
