import { classNames } from '../../helpers/classNames'
import { RubikRegular } from '../../helpers/fonts'

type DesktopNavigationLinkProps = {
  href: string
  name: string
  scrollFunc: Function
}

const DesktopNavigationLink = ({
  href,
  name,
  scrollFunc,
}: DesktopNavigationLinkProps) => {
  return (
    <button
      onClick={() => scrollFunc(href)}
      className={classNames(
        'text-slate-400 hover:bg-slate-700 hover:bg-opacity-40 hover:text-emerald-300 focus-visible:text-emerald-300 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-emerald-300',
        'rounded-md px-3 py-2 text-base font-medium hover:cursor-pointer',
        RubikRegular.className
      )}
    >
      {name}
    </button>
  )
}

export default DesktopNavigationLink
