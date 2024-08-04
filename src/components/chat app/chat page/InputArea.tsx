import React, { useRef, useEffect } from 'react';
import { PiImageSquareFill } from 'react-icons/pi';
import { IoIosSend } from 'react-icons/io';

const YourComponent: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height to auto
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      handleInput(); // Adjust height on initial render
    }
  }, []);

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
