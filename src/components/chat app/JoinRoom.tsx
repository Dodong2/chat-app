interface JoinRoomProps {
    children: React.ReactNode
}

const JoinRoom: React.FC<JoinRoomProps> = ({ children }) => {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  )
}

export default JoinRoom
