interface JoinRoomProps {
    children: React.ReactNode
    ClassStyle: string
}

const JoinRoom: React.FC<JoinRoomProps> = ({ children, ClassStyle }) => {
  return (
    <>
      <div className={ClassStyle}>
        {children}
      </div>
    </>
  )
}

export default JoinRoom
