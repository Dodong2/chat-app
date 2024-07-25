interface SelectionProps {
    children: React.ReactNode
}

const Selection: React.FC<SelectionProps> = ({ children }) => {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  )
}

export default Selection
