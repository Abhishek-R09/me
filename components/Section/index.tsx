type SectionPropTypes = {
  children: React.ReactNode
  id: string
}

const Section = ({ children, id }: SectionPropTypes) => {
  return (
    <section id={id} className="m-auto pt-24 xl:max-w-4xl">
      {children}
    </section>
  )
}

export default Section
