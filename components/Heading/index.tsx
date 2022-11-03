import { classNames } from '../../helpers/classNames'
import { RubikBold } from '../../helpers/fonts'

type MainHeadingsType = {
  title: string
  otherClasses?: string
}

const MainHeadings = ({ title, otherClasses = '' }: MainHeadingsType) => {
  return (
    <h2
      className={classNames(
        'relative mb-10 flex w-full items-center text-xl text-slate-300 before:relative before:mr-3 before:h-px before:w-full before:bg-emerald-300 after:relative after:ml-3 after:h-px after:w-full after:bg-emerald-300',
        RubikBold.className,
        otherClasses
      )}
    >
      {title}
    </h2>
  )
}

export default MainHeadings
