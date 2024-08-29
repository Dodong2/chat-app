/********** step 2 ng Join room  **********/
import { useState } from 'react';
import { joinroom } from '../services/roomService';

export const useJoinRoom = () => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    try {
      const data = await joinroom(formData);
      // Perform validation check based on backend response
      if (data.room_id && data.password) {
        setIsValid(true);
      } else {
        setIsValid(false);
        setError('Room not found or invalid credentials');
      }
    } catch (error) {
      setIsValid(false);
      setError('Failed to join room');
    }
  };

  return { isValid, error, handleSubmit };
};
