import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'
import { classNames } from '../../../../../helpers/classNames'
import Bottom from './Bottom'
import CardActions from './CardActions'
import Middle from './Middle'
import Top from './Top'

interface CardContentProps {
  projDesc: string
  projName: string
  projLink: string
  index: number
  techUsed: string[]
  website: string | null
  showFullImage: () => void
}

const CardContent: FunctionComponent<CardContentProps> = ({
  projDesc,
  projName,
  projLink,
  index,
  techUsed,
  website,
  showFullImage,
}) => {
  return (
    <motion.div
      className={classNames(
        'relative z-20 col-span-full row-span-full p-5 shadow-lg md:p-5 md:shadow-none',
        index % 2 == 0
          ? 'md:col-span-full md:col-start-5 md:items-end md:pr-0 md:text-right lg:col-start-6'
          : 'md:col-start-1 md:col-end-9 md:pl-0 lg:col-end-8'
      )}
    >
      <Top projName={projName} />
      <Middle projDesc={projDesc} />
      <Bottom techUsed={techUsed} index={index} />
      <CardActions
        projLink={projLink}
        projName={projName}
        website={website}
        index={index}
        showFullImage={showFullImage}
      />
    </motion.div>
  )
}

export default CardContent
