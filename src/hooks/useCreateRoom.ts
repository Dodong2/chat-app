import { useState } from 'react';
import { createRoom } from '../services/roomService';

export const useCreateRoom = () => {
  const [roomData, setRoomData] = useState<{ room_id: string; room_name: string; password: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    try {
      const data = await createRoom(formData);
      setRoomData(data);
    } catch (error) {
      setError('Failed to create room');
    }
  };

  return { roomData, error, handleSubmit };
};
