import { useState, useEffect } from 'react';
import { isInputEmpty } from '../utils/inputValidator';

const useInputValidation = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    setIsButtonDisabled(isInputEmpty(inputValue));
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return {
    inputValue,
    isButtonDisabled,
    handleInputChange,
  };
};

export default useInputValidation;
