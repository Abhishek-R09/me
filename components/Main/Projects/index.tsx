import { motion } from 'framer-motion'
import React from 'react'
import { classNames } from '../../../helpers/classNames'
import { RubikBold } from '../../../helpers/fonts'
import { HomePageProps, listUserReposResponse } from '../../../pages'
import MainHeadings from '../../Heading'
import Section from '../../Section'
import OtherProjectsCard from './OtherProjectsCard'
import ProjectCard from './ProjectCard'
import { projects } from './projects'

const Projects = ({ repos }: HomePageProps) => {
  // console.log(repos.length)

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
            website={project?.website || null}
          />
        ))}
      </ul>
      <motion.h2
        className={classNames(
          'my-10 w-full text-center text-xl text-amber-200 lg:text-2xl xl:text-3xl',
          RubikBold.className
        )}
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'tween', ease: 'easeInOut' }}
      >
        {`Some More Projects`}
      </motion.h2>
      <ul className="grid list-none gap-4 sm:grid-cols-2 md:grid-cols-3">
        {repos.map((repo) => (
          <OtherProjectsCard
            key={repo.id}
            name={repo.name}
            language={repo.language}
            html_url={repo.html_url}
            description={repo.description}
            homepage={repo.homepage}
          />
        ))}
      </ul>
    </Section>
  )
}

export default Projects
