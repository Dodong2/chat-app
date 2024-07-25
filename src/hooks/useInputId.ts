import { useState, useRef } from 'react';

const useInputId = (length: number) => {
  const [otpDigits, setOtpDigits] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(length).fill(null));

  const handleChange = (index: number, value: string) => {
    if (/^[0-9]*$/.test(value)) {
      const newOtpDigits = [...otpDigits];
      newOtpDigits[index] = value;
      setOtpDigits(newOtpDigits);
      if (value !== '' && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace' && index > 0 && otpDigits[index] === '') {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return {
    otpDigits,
    inputRefs,
    handleChange,
    handleKeyDown,
  };
};

export default useInputId;
