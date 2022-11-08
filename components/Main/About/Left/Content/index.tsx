import { classNames } from '../../../../../helpers/classNames'
import { RubikRegular } from '../../../../../helpers/fonts'
import { aboutContent } from './text'

const Content = () => {
  return (
    <div className={classNames('text-slate-400', RubikRegular.className)}>
      {aboutContent.map((c) => (
        <p key={c} className="mb-3">
          {c}
        </p>
      ))}
    </div>
  )
}
export default Content
