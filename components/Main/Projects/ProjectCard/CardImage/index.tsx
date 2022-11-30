import { classNames } from '../../../../../helpers/classNames'
import Image, { StaticImageData } from 'next/image'
import { FunctionComponent } from 'react'

interface CardImageProps {
  index: number
  imgUrl: StaticImageData
  imgTitle: string
  fullImage: boolean
  hideFullImage: () => void
}

const CardImage: FunctionComponent<CardImageProps> = ({
  index,
  imgUrl,
  imgTitle,
  fullImage,
  hideFullImage,
}) => {
  return (
    <div
      onClick={hideFullImage}
      className={classNames(
        'z-10 col-span-full row-span-full h-full rounded-md bg-amber-100 opacity-5 transition-all md:row-start-2 md:row-end-6 md:opacity-40 md:hover:z-20 md:hover:row-span-full md:hover:border-2 md:hover:border-amber-300 md:hover:bg-transparent md:hover:opacity-100 xl:row-span-full',
        fullImage
          ? ' z-20 cursor-pointer border-2 border-amber-400 opacity-100 md:z-10'
          : 'z-10 opacity-5',
        index % 2 == 0
          ? 'md:col-start-1 md:col-end-9 md:hover:col-end-13 lg:col-end-8'
          : 'md:col-span-full md:col-start-5 md:hover:col-start-1 lg:col-start-6'
      )}
    >
      <div className="relative h-full w-full rounded-md">
        <Image
          src={imgUrl}
          alt={imgTitle}
          title={`${imgTitle}${fullImage ? ', Click to close' : ''}`}
          fill={true}
          className={classNames(
            'rounded-md object-cover object-left-top mix-blend-multiply sm:object-fill'
          )}
          sizes="(min-width: 768px) 60vw,100vw"
        />
      </div>
    </div>
  )
}

export default CardImage
