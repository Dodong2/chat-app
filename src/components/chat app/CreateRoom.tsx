/********** react library **********/
import { Link } from "react-router-dom";
/********** Icons **********/
import CreateBanner from '../../assets/svg/create-banner.svg'
/********** Icons **********/
import { MdOutlineKeyboardBackspace } from "react-icons/md";
/********** Components **********/
import IDinput from "./id inputs/IdInput";
import useInputId from "../../hooks/useInputId";

const CreateRoom: React.FC = () => {
  const { otpDigits, inputRefs, handleChange, handleKeyDown } = useInputId(4);

  return (
    <>
      <div className="createroom">
        <div className="back">
          <Link to="/userselection">
            <button>
              <MdOutlineKeyboardBackspace />
            </button>
          </Link>
        </div>
        <div className="createroom-text">
          <h1>Create Room</h1>
        </div>
        <div className="create-banner">
          <img src={CreateBanner} alt="CreateBanner"/>
        </div>
        <form>
          <div className="createroom-input-id">
            <h1>Room ID</h1>
            <IDinput
              otpDigits={otpDigits}
              inputRefs={inputRefs}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
            />
          </div>
          <div className="createroom-input">
            <input type="text" placeholder="Room Name" required />
            <input type="text" placeholder="password" required />
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateRoom;
