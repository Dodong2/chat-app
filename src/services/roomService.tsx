/********** step 1 ng create room  **********/
export const createRoom = async (formData: FormData) => {
  try {
    const response = await fetch('https://practice.mchaexpress.com/chat-app/api/room/create', {
      method: 'POST',
      body: formData,
    });

    if (!response.status) {
      throw new Error('Failed to create room');
    }

    const data = await response.json();
    return data; // This should contain room_id, room_name, and password
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

/********** step 1 ng Join room  **********/
export const joinroom = async (formData: FormData) => {
  try {
    const response = await fetch('https://practice.mchaexpress.com/chat-app/api/room/join', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()
    
    if(data.status === 'error') {
      console.error(data.message)
    }

    return data
  } catch (error) {
    console.error('Error', error)
    throw error
  }
}
