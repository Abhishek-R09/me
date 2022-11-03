import { classNames } from '../../helpers/classNames'
import { RubikRegular } from '../../helpers/fonts'

type MobileNavigationLinkProps = {
  href: string
  name: string
  close: Function
  scrollFunc: Function
  tabIndex: number
}

const MobileNavigationLink = ({
  href,
  name,
  close,
  scrollFunc,
  tabIndex,
}: MobileNavigationLinkProps) => {
  return (
    <button
      className={classNames(
        'w-full text-slate-400 hover:bg-gray-600 hover:text-emerald-300',
        'block rounded-md px-3 py-2 text-base font-medium focus-visible:text-emerald-300 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-emerald-300',
        RubikRegular.className
      )}
      tabIndex={tabIndex}
      onClick={(e) => {
        scrollFunc(href)
        close()
        return e
      }}
    >
      {name}
    </button>
  )
}

export default MobileNavigationLink
