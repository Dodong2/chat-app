import { useState } from "react";
import { joinroom } from "../services/roomService";

export const useJoinRoom = () => {
    const [roomData, setRoomData] = useState<{ room_id: string; password: string } | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (formData: FormData) => {
        try {
            const data = await joinroom(formData)
            setRoomData(data) 
        } catch (error){
            setError('Failed join room')
        }
    }

    return { handleSubmit, roomData, error }

}