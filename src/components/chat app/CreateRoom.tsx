interface CreateRoomProps {
    children: React.ReactNode
}

const CreateRoom: React.FC<CreateRoomProps> = ({ children }) => {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  )
}

export default CreateRoom
