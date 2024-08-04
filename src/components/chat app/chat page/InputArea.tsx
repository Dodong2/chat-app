import { IoIosSend } from "react-icons/io";
import { PiImageSquareFill } from "react-icons/pi";

const InputArea = () => {
  return (
    <>
      <div className="input-area">
      <button className="send-button"><PiImageSquareFill/></button>
      <textarea rows={1} placeholder="Enter text" className="input-text"></textarea>
      <button className="send-button"><IoIosSend/></button>
    </div>
    </>
  )
}

export default InputArea
