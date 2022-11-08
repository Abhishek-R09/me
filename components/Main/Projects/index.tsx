import React from 'react'
import MainHeadings from '../../Heading'
import Section from '../../Section'
import ProjectCard from './ProjectCard'
import { projects } from './projects'

const Projects = () => {
  return (
    <Section id="projects">
      <MainHeadings title="Projects" />
      <ul className="list-none">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.projName}
            projName={project.projName}
            projDesc={project.projDesc}
            imgUrl={project.imgUrl}
            imgTitle={project.imgTitle}
            projLink={project.projLink}
            techUsed={project.techUsed}
            index={index}
          />
        ))}
      </ul>
    </Section>
  )
}

export default Projects
