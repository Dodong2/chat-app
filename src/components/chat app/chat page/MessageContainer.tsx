interface MessageContainerProps {
    children: React.ReactNode
}

const MessageContainer: React.FC<MessageContainerProps> = ({ children }) => {
  return (
    <div className="message-container">
      {children}
    </div>
  )
}

export default MessageContainer
