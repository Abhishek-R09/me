import { FunctionComponent } from 'react'
import { classNames } from '../../../../../../helpers/classNames'
import { jetBrainsMonoRegular, RubikBold } from '../../../../../../helpers/fonts'

interface TopProps {
  projName: string
}

const Top: FunctionComponent<TopProps> = ({ projName }) => {
  return (
    <>
      <p
        className={classNames('mb-1 text-amber-200', jetBrainsMonoRegular.className)}
      >
        Featured
      </p>
      <h3
        className={classNames(
          'mb-3 text-lg text-amber-300 selection:bg-amber-200 selection:text-amber-900',
          RubikBold.className
        )}
      >
        {projName}
      </h3>
    </>
  )
}

export default Top
