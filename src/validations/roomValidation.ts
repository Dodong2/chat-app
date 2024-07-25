export const validateRoomName = (roomName: string): boolean => {
    return roomName.length > 0
}

export const validatePassword = (password: string): boolean => {
    return password.length === 0 || password.length > 3
}