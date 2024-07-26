/********** react library **********/
import { Link } from "react-router-dom";
/********** Icons **********/
import { MdOutlineKeyboardBackspace } from "react-icons/md";
/********** Components **********/
import JoinRoom from "../components/chat app/JoinRoom";

const JoinRoomPages = () => {
  return (
    <>
      <JoinRoom ClassStyle="joinroom">
        <div className="back">
          <Link to="/userselection">
            <button><MdOutlineKeyboardBackspace /></button>
          </Link>
        </div>
        <div className="join-text">
          <h1>Join Room</h1>
        </div>
        <div className="joinroom-inputs">
        <form>
          <input type="text" placeholder="Room ID" required />
          <input type="text" placeholder="password" required />
          <button type="submit">Enter</button>
        </form>
        </div>
      </JoinRoom>
    </>
  );
};

export default JoinRoomPages;
