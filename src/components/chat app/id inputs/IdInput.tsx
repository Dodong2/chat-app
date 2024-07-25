import React from 'react';

interface OtpInputProps {
  otpDigits: string[];
  inputRefs: React.RefObject<(HTMLInputElement | null)[]>;
  handleChange: (index: number, value: string) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
}

const IdInput: React.FC<OtpInputProps> = ({ otpDigits, inputRefs, handleChange, handleKeyDown }) => {
  return (
    <div>
      {otpDigits.map((digit, index) => (
        <input
          key={index}
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => {
            if (inputRefs.current) {
              inputRefs.current[index] = el;
            }
          }}
        />
      ))}
    </div>
  );
};

export default IdInput;
