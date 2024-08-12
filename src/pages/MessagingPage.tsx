/********** Components **********/
import Conversation from "../components/chat app/chat page/Conversation"
import InputArea from '../components/chat app/chat page/InputArea'
import MessageContainer from "../components/chat app/chat page/MessageContainer"
import RoomNameHeader from "../components/chat app/chat page/RoomNameHeader"

const MessagingPage = () => {
  return (
    <>
      <MessageContainer>
        <RoomNameHeader/>
        <Conversation />
        <InputArea />
      </MessageContainer>
    </>
  )
}

export default MessagingPage
