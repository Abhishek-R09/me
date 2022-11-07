import { classNames } from '../../../../../helpers/classNames'
import { RubikRegular } from '../../../../../helpers/fonts'

const Content = () => {
  const content = [
    `Hi! I'm Abhishek Ramasubramanian. I'm a Computer Science student from Vellore Institute of Technology, Vellore. The amount of progress made in the field of computer science fascinates me and motivates me to explore new things. I'm open to learning new stuff and going beyond them.`,
    `I have some experience in using different Web Technologies and also work with Databases in SQL as well as NoSQL. The best of my projects are listed down below and they are open-source. I would welcome suggestions to improve them. I have even collaborated on some of them. Please do check it out.`,
    `I'm an apt leader and a good communicator where needed. I focus on my goal and don't deviate from it unless necessary. I give priority to the completion of the assigned work and not leave it till the end. This is my guarantee. I'm fluent in English and Hindi while Tamil is my mother tongue. Generally I don't post much things on social media but I'm present there to be updated with the current affairs.`,
    `Here are a few technologies I’ve been working with recently:`,
  ]

  return (
    <div className={classNames('text-slate-400', RubikRegular.className)}>
      {content.map((c) => (
        <p key={c} className="mb-3">
          {c}
        </p>
      ))}
    </div>
  )
}
export default Content
