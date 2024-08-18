/********** react library **********/
import { Link } from "react-router-dom";
/********** SVG **********/
import CreateBanner from "../../assets/svg/create-banner.svg";
/********** Icons **********/
import { MdOutlineKeyboardBackspace } from "react-icons/md";
/********** Hooks **********/
import { useCreateRoom } from "../../hooks/useCreateRoom";

const CreateRoom: React.FC = () => {
  
  /********** step 3 ng create room  **********/
  /********** onSubmit **********/
  const { handleSubmit, roomData, error } = useCreateRoom();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    handleSubmit(formData);
  };

  return (
    <div className="createroom">
      <div className="back">
        <Link to="/userselection">
          <button>
            <MdOutlineKeyboardBackspace />
          </button>
        </Link>
      </div>
      <div className="create-banner">
        <img src={CreateBanner} alt="CreateBanner" />
      </div>
      <div className="createroom-text">
        <h1>Create Room</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="createroom-input-id">
          <h1>Room ID</h1>
          <input type="number" name="room_id" placeholder="room Id" required />
        </div>
        <div className="createroom-input">
          <input type="text" name="room_name" placeholder="Room Name" required />
          <input type="text" name="password" placeholder="password" required />
          <button type="submit">Create</button>
        </div>
      </form>
      {/********** room information **********/}
      {roomData && (
          <div className="room-info">
            <div className="room-info-content">
            <h2>Room Created</h2>
            <Link to="/username">
            <button>Continue</button>
            </Link>
            </div>
          </div>
        )}
        {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CreateRoom;
