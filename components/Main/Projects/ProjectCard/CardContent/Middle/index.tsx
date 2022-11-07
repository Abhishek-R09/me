import { FunctionComponent } from 'react'
import { classNames } from '../../../../../../helpers/classNames'
import { RubikRegular } from '../../../../../../helpers/fonts'

interface MiddleProps {
  projDesc: string
}

const Middle: FunctionComponent<MiddleProps> = ({ projDesc }) => {
  return (
    <p
      className={classNames(
        'mb-3 rounded-md text-slate-400',
        RubikRegular.className,
        'md:bg-slate-800 md:p-5'
      )}
    >
      {projDesc}
    </p>
  )
}

export default Middle
