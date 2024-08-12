/********** Components **********/
import Conversation from "../components/chat app/chat page/Conversation"
import InputArea from '../components/chat app/chat page/InputArea'
import MessageContainer from "../components/chat app/chat page/MessageContainer"

const MessagingPage = () => {
  return (
    <>
      <MessageContainer>
        <Conversation />
        <InputArea />
      </MessageContainer>
    </>
  )
}

export default MessagingPage
