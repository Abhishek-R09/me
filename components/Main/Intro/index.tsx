import { classNames } from '../../../helpers/classNames'
import { motion } from 'framer-motion'
import {
  jetBrainsMonoRegular,
  RubikBold,
  RubikRegular,
} from '../../../helpers/fonts'
import ExternalLink from '../../ExternalLink'

const Intro = () => {
  return (
    <motion.section
      id="home"
      className="m-auto mb-3 flex min-h-screen max-w-5xl flex-col items-start justify-center pt-16 lg:pt-20"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="md:text-center">
        <p
          className={classNames(
            'mb-3 leading-snug text-amber-300 selection:bg-amber-200 selection:text-amber-900 xsm:text-base sm:text-lg xl:text-xl',
            jetBrainsMonoRegular.className
          )}
        >
          Hi! I'm
        </p>
        <h1
          className={classNames(
            'mb-3 text-2xl text-amber-200 xsm:text-3xl sm:text-4xl xl:text-5xl',
            RubikBold.className
          )}
        >
          Abhishek Ramasubramanian.
        </h1>
        {/* <h1
          className={classNames(
            'mb-3 text-2xl text-amber-100 xsm:text-3xl sm:text-4xl xl:text-5xl',
            RubikBold.className
          )}
        >
          I develop things for the web.
        </h1> */}
        <p
          className={classNames(
            'text-md mb-6 text-amber-100 xsm:text-base sm:text-lg xl:text-xl',
            RubikRegular.className
          )}
        >
          {`I’m a recent graduate from `}{' '}
          <ExternalLink text="VIT, Vellore" link="https://vit.ac.in/" />
          {` with internship experience of 8 months at `}
          <ExternalLink
            text="Morgan Stanley"
            link="https://www.morganstanley.com/"
          />
          {` and `}
          <ExternalLink text="Fiserv" link="https://www.fiserv.com/" />
          {`.  I am actively seeking new opportunities in entry-level software development engineer roles.`}
        </p>
        <a
          href="https://drive.google.com/file/d/1w8j450AqiykfnSzHyVZci-QG7gELshV2/view?usp=drive_link"
          target="_blank"
          className={classNames(
            'b-1 mt-3 rounded-md border border-amber-300 px-6 py-3 text-sm text-amber-300 transition ease-linear selection:bg-amber-200 selection:text-amber-900 hover:bg-amber-200 hover:bg-opacity-10 focus-visible:bg-amber-100 focus-visible:bg-opacity-10 focus-visible:outline-none xsm:text-base sm:text-lg xl:text-xl',
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
