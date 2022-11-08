import { classNames } from '../../../../../helpers/classNames'
import Image, { StaticImageData } from 'next/image'
import { FunctionComponent } from 'react'

interface CardImageProps {
  index: number
  imgUrl: StaticImageData
  imgTitle: string
}

const CardImage: FunctionComponent<CardImageProps> = ({
  index,
  imgUrl,
  imgTitle,
}) => {
  return (
    <div
      className={classNames(
        'z-10 col-span-full row-span-full h-full rounded-md bg-sky-200 opacity-5 transition-all md:row-start-2 md:row-end-6 md:opacity-40 md:hover:bg-transparent md:hover:opacity-100 xl:row-span-full',
        index % 2 == 0
          ? 'md:col-start-1 md:col-end-9 lg:col-end-8'
          : 'md:col-span-full md:col-start-5 lg:col-start-6'
      )}
    >
      <div className="relative h-full w-full rounded-md mix-blend-multiply">
        <Image
          src={imgUrl}
          alt={imgTitle}
          title={imgTitle}
          fill={true}
          className="rounded-md object-cover object-left-top"
          sizes="(min-width: 768px) 60vw,100vw"
        />
      </div>
    </div>
  )
}

export default CardImage
