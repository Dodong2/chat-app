/********** react library **********/
import { Link } from "react-router-dom";
/********** Components **********/
import IDinput from "../components/chat app/id inputs/IdInput";
import useInputId from "../hooks/useInputId";
import CreateRoom from "../components/chat app/CreateRoom";


const CreateRoomPage = () => {
  const { otpDigits, inputRefs, handleChange, handleKeyDown } = useInputId(4);
  return (
    <>
      <CreateRoom>
        <h1>Create Room</h1><br/><br/>
        <h1>Room ID</h1>
        <IDinput
          otpDigits={otpDigits}
          inputRefs={inputRefs}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
        />
        <form>
          <input type="text" placeholder="Room Name" required />
          <input type="text" placeholder="password" required />
          <button type="submit">Create</button>
        </form><br/><br/>
        
        <Link to="/userselection">
        <button>back</button>
        </Link>
      </CreateRoom>
    </>
  );
};

export default CreateRoomPage;
