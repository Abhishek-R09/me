import React from 'react'
import { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import CardImage from './CardImage'
import CardContent from './CardContent'

type ProjectCardProps = {
  imgUrl: StaticImageData
  imgTitle: string
  projName: string
  projLink: string
  projDesc: string
  techUsed: string[]
  index: number
}

const ProjectCard = ({
  imgUrl,
  imgTitle,
  projName,
  projLink,
  projDesc,
  techUsed,
  index,
}: ProjectCardProps) => {
  return (
    <motion.li
      className="relative mb-5 grid grid-cols-12 grid-rows-6 items-center gap-2 last:mb-0 lg:mb-10"
      initial="init"
      whileInView="inview"
      transition={{ type: 'tween', ease: 'easeInOut' }}
      viewport={{ once: true }}
      variants={{ init: { opacity: 0, x: -100 }, inview: { opacity: 1, x: 0 } }}
    >
      <CardContent
        projName={projName}
        techUsed={techUsed}
        projDesc={projDesc}
        projLink={projLink}
        index={index}
      />
      <CardImage imgUrl={imgUrl} imgTitle={imgTitle} index={index} />
    </motion.li>
  )
}

export default ProjectCard
