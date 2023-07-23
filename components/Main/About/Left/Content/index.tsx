import { classNames } from '../../../../../helpers/classNames'
import { RubikRegular } from '../../../../../helpers/fonts'
import ExternalLink from '../../../../ExternalLink'
import { aboutContent } from './text'

const Content = () => {
  return (
    <div className={classNames('text-amber-100 xl:text-lg', RubikRegular.className)}>
      {/* {aboutContent.map((c) => (
        <p key={c} className="mb-3">
          {c}
        </p>
      ))} */}
      <p className="mb-3">
        {`Hello! My name is Abhishek. I'm a recent Computer Science graduate from `}
        <ExternalLink text="VIT, Vellore" link="https://vit.ac.in/" />
        {`.`}
        {/* {`. The amount of progress made in computer science fascinates me and motivates me to explore new things. I'm open to learning new stuff and going beyond them.`} */}
      </p>
      <p className="mb-3">
        {`I started my programming journey with frontend web technologies such as HTML, CSS, and JavaScript. I haven't stopped since then. Building things for the web, both client-side and server side,
        has been my favorite.`}
      </p>
      <p className="mb-3">
        {`With good command over my programming skills and a
        passion for solving problems, I got opportunities to work as an intern at`}{' '}
        <ExternalLink link="https://www.fiserv.com/" text="Fiserv" />
        {` in the summer of 2022 and a six months internship at `}
        <ExternalLink text="Morgan Stanley" link="https://www.morganstanley.com/" />
        {` in the Spring of 2023. As I transition into the professional world, I am actively seeking new opportunities. I am particularly interested in entry-level software development engineer roles, where I can leverage my skills, knowledge, and enthusiasm.`}
      </p>
      <p className="mb-3">
        {`Here are a few technologies I’ve been working with recently:`}
      </p>
    </div>
  )
}
export default Content
