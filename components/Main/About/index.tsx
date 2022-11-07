import MainHeadings from '../../Heading'
import Section from '../../Section'
import Left from './Left'
import Right from './Right'

const About = () => {
  return (
    <Section id="about">
      <MainHeadings title="About" />
      <div className="flex flex-col md:flex-row">
        <Left />
        <Right />
      </div>
    </Section>
  )
}

export default About
