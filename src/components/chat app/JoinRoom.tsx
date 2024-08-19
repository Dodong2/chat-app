/********** react library **********/
import { Link, useNavigate } from "react-router-dom";
/********** Icons **********/
import { MdOutlineKeyboardBackspace } from "react-icons/md";
/********** Hooks **********/
import { useJoinRoom } from "../../hooks/useJoinRoom";


const JoinRoom: React.FC = () => {
  const { handleSubmit, roomData, error } = useJoinRoom()
  // const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    await handleSubmit(formData)

    // if (roomData) {
    //   navigate("/username")
    // }
  }



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
          <form onSubmit={onSubmit}>
            <input type="text" name="room_id" placeholder="Room ID" required />
            <input type="text" name="password" placeholder="password" required />
              <button type="submit">Enter</button>
          </form>
        </div>
        {roomData && (
          <div className="room-info">
            <div className="room-info-content">
            <h2>Successfully joined</h2>
            <Link to="/username">
            <button>Continue</button>
            </Link>
            </div>
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
};

export default JoinRoom;
