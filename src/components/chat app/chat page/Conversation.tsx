

const Conversation = () => {
  return (
    <>
      <div className="conversation">
      {/* Receiver's message*/}
      <div className="message receiver">
        <p>This is the receiver's message.</p>
      </div>
      {/* sender message*/}
      <div className="message sender">
        <p>This is the receiver's message.</p>
      </div>
      <div className="input-area">
      <textarea rows={1} placeholder="Enter text" class="input-text"></textarea>
      <button className="send-button">Send</button>
    </div>
      </div>
    </>
  )
}

export default Conversation
