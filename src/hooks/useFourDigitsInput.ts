import { useState } from "react";

export const useFourDigitInput = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Limit the input to 4 characters
    const newValue = event.target.value.slice(0, 4);
    setValue(newValue);
  };

  return { value, handleChange };
};