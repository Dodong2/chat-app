/********** react library **********/
import { Link } from "react-router-dom";
/********** Components **********/
import JoinRoom from "../components/chat app/JoinRoom";
const JoinRoomPages = () => {
  return (
    <>
      <JoinRoom>
        <h1>Join Room</h1>
        <form>
          <input type="text" placeholder="Room ID" required />
          <input type="text" placeholder="password" required />
          <button type="submit">Enter</button>
        </form>
        <Link to="/userselection">
        <button>back</button>
        </Link>
      </JoinRoom>
    </>
  );
};

export default JoinRoomPages;
