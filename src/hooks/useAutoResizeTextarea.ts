import { useRef, useEffect } from "react";

export const useAutoResizeTextarea = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to auto
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      handleInput(); // Adjust height on initial render
    }
  }, []);
  return { handleInput, textareaRef };
};

export default useAutoResizeTextarea;
