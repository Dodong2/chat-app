interface IntroductionProps {
    children: React.ReactNode
    ClassStyle: string
}


const introduction: React.FC<IntroductionProps> = ({ children, ClassStyle }) => {
  return (
    <>
      <div className={ClassStyle}>
        {children}
      </div>
    </>
  )
}

export default introduction
