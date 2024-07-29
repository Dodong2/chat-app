/********** react library **********/
import { Link } from "react-router-dom";
/********** Icons **********/
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const JoinRoom: React.FC = () => {
  return (
    <>
      <div className="joinroom">
        <div className="back">
          <Link to="/userselection">
            <button>
              <MdOutlineKeyboardBackspace />
            </button>
          </Link>
        </div>
        <div className="join-text">
          <h1>Join Room</h1>
        </div>
        <div className="joinroom-inputs">
          <form>
            <input type="text" placeholder="Room ID" required />
            <input type="text" placeholder="password" required />
            <Link to="/username">
              <button type="submit">Enter</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default JoinRoom;
