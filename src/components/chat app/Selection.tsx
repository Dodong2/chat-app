interface SelectionProps {
    children: React.ReactNode
    ClassStyle: string
}

const Selection: React.FC<SelectionProps> = ({ children, ClassStyle }) => {
  return (
    <>
      <div className={ClassStyle}>
        {children}
      </div>
    </>
  )
}

export default Selection
