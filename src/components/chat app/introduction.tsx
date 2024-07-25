interface IntroductionProps {
    children: React.ReactNode
}


const introduction: React.FC<IntroductionProps> = ({ children }) => {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  )
}

export default introduction
