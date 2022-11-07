import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faReact, faNode } from '@fortawesome/free-brands-svg-icons'
import Skill from './Skill'

const skills = [
  {
    name: 'TypeScript',
    icon: <FontAwesomeIcon icon={faReact} />,
    color: '#61DAFB',
  },
  {
    name: 'React.js',
    icon: <FontAwesomeIcon icon={faReact} />,
    color: '#61DAFB',
  },
  {
    name: 'Spring Boot',
    icon: <FontAwesomeIcon icon={faDatabase} />,
    color: '#00758F',
  },
  {
    name: 'Express.js',
    icon: <FontAwesomeIcon icon={faNode} />,
    color: '#77B062',
  },
  {
    name: 'SQL',
    icon: <FontAwesomeIcon icon={faNode} />,
    color: '#77B062',
  },
  {
    name: 'MongoDB',
    icon: <FontAwesomeIcon icon={faNode} />,
    color: '#77B062',
  },
]

const Skills = () => {
  return (
    <ul className="grid grid-cols-2 gap-2">
      {skills.map((skill) => (
        <Skill key={skill.name} name={skill.name} />
      ))}
    </ul>
  )
}

export default Skills
