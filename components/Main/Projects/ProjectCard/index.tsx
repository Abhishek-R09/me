import React, { useState } from 'react'
import { StaticImageData } from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import CardImage from './CardImage'
import CardContent from './CardContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type ProjectCardProps = {
  imgUrl: StaticImageData
  imgTitle: string
  projName: string
  projLink: string
  projDesc: string
  techUsed: string[]
  index: number
  website: string | null
}

const ProjectCard = ({
  imgUrl,
  imgTitle,
  projName,
  projLink,
  projDesc,
  techUsed,
  index,
  website,
}: ProjectCardProps) => {
  const [fullImage, setFullImage] = useState(false)
  const [shown, setShown] = useState(false)

  const showFullImage = () => {
    setFullImage(true)
    setShown(false)
  }
  const hideFullImage = () => {
    setFullImage(false)
    setShown(false)
  }

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
        website={website}
        showFullImage={showFullImage}
      />
      <CardImage
        imgUrl={imgUrl}
        imgTitle={imgTitle}
        index={index}
        fullImage={fullImage}
        hideFullImage={hideFullImage}
      />
      <AnimatePresence>
        {fullImage && !shown && (
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 top-0 z-20 flex items-center gap-2 rounded-tr-md rounded-bl-md border-2 border-amber-300 bg-slate-800 p-2 text-amber-300"
            // hidden={shown}
          >
            <span className="flex">Click the image to close</span>
            <button
              type="button"
              className="rounded-md p-1 text-amber-100 outline-none transition-all hover:text-amber-200 focus-visible:bg-amber-100 focus-visible:bg-opacity-10 focus-visible:text-amber-200 focus-visible:outline-none"
              title="Close this message"
              onClick={() => setShown(true)}
            >
              <FontAwesomeIcon icon={faXmark} className="text-lg" />
            </button>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export default ProjectCard
