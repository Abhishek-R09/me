import { classNames } from '../../../helpers/classNames'
import { motion } from 'framer-motion'
import {
  jetBrainsMonoRegular,
  RubikBold,
  RubikRegular,
} from '../../../helpers/fonts'

const Intro = () => {
  return (
    <motion.section
      id="home"
      className="m-auto mb-3 flex min-h-screen max-w-5xl flex-col items-start justify-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="md:text-center">
        <p
          className={classNames(
            'mb-3 leading-snug text-emerald-300 xsm:text-base sm:text-lg xl:text-xl',
            jetBrainsMonoRegular.className
          )}
        >
          Hi, My name is
        </p>
        <h1
          className={classNames(
            'mb-3 text-2xl text-slate-300 xsm:text-3xl sm:text-4xl xl:text-5xl',
            RubikBold.className
          )}
        >
          Abhishek Ramasubramanian.
        </h1>
        <h1
          className={classNames(
            'mb-3 text-2xl text-slate-400 xsm:text-3xl sm:text-4xl xl:text-5xl',
            RubikBold.className
          )}
        >
          I build things for the web.
        </h1>
        <p
          className={classNames(
            'text-md mb-6 text-slate-400 xsm:text-base sm:text-lg xl:text-xl',
            RubikRegular.className
          )}
        >
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
        <a
          href="https://drive.google.com/file/d/122D_oWvFF9-pet9neCNXPW40OVTWWlRk/view?usp=share_link"
          target="_blank"
          className={classNames(
            'b-1 mt-3 rounded-md border border-emerald-300 px-6 py-3 text-sm text-emerald-300 transition ease-linear hover:bg-emerald-100 hover:bg-opacity-10 focus-visible:bg-emerald-100 focus-visible:bg-opacity-10 focus-visible:outline-none xsm:text-base sm:text-lg xl:text-xl',
            jetBrainsMonoRegular.className
          )}
        >
          Resume
        </a>
      </div>
    </motion.section>
  )
}

export default Intro
