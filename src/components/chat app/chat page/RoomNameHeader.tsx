/********** Icons **********/
import { FiMenu } from "react-icons/fi";
import { IoClose } from 'react-icons/io5';
/********** Hooks **********/
import { useSidebar } from "../../../hooks/useSidebar";
/********** Components **********/
import Sidebar from './Sidebar'

const RoomNameHeader = () => {
  const { isOpen, toggleSidebar } = useSidebar()

  return (
    <>
      <nav>
        <div className="room-name">
            <h1>Room name</h1>
        </div>
        <div className="navbar-menu">
            <button onClick={toggleSidebar}>{ isOpen ? <IoClose/> : <FiMenu/>}</button> 
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
      </nav>
    </>
  )
}

export default RoomNameHeader
