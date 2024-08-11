import { PiImageSquareFill } from 'react-icons/pi';
import { IoIosSend } from 'react-icons/io';
import { useAutoResizeTextarea } from '../../../hooks/useAutoResizeTextarea'

const YourComponent: React.FC = () => {
  const { textareaRef, handleInput } = useAutoResizeTextarea()

  return (
    <div className="input-area">
      <button className="send-button"><PiImageSquareFill /></button>
      <textarea
        ref={textareaRef}
        rows={1}
        placeholder="Enter text"
        className="input-text"
        onInput={handleInput}
      ></textarea>
      <button className="send-button"><IoIosSend /></button>
    </div>
  );
};

export default YourComponent;
