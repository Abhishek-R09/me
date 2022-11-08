import { motion } from 'framer-motion'
import Image from 'next/image'
import myImg from '../../../../public/static/images/myImage.jpg'

const Right = () => {
  return (
    <motion.div
      className="mx-auto mt-8 box-border h-full w-4/5 rounded-md bg-sky-300 transition-all hover:bg-white xsm:w-3/5 sm:w-1/2 md:basis-2/5 lg:basis-1/3"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'tween', ease: 'easeInOut' }}
      viewport={{ once: true }}
    >
      <div className="mix-blend-multiply">
        <Image
          src={myImg}
          alt="My image"
          title="Abhishek Ramasubramanian"
          placeholder="blur"
          className="rounded-md"
        />
      </div>
    </motion.div>
  )
}

export default Right
