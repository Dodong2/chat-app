import { IoMenu } from "react-icons/io5";

const RoomNameHeader = () => {
  return (
    <>
      <nav>
        <div className="room-name">
            <h1>Room name</h1>
        </div>
        <div className="navbar-menu">
            <h1><IoMenu/></h1>
        </div>
      </nav>
    </>
  )
}

export default RoomNameHeader
