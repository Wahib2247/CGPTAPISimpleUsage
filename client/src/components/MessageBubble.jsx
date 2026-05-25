// MessageBubble renders a single chat message
// It looks different depending on whether the role is "user" or "assistant"

const MessageBubble = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "16px",
      }}
    >
      <div className={`message-bubble ${isUser ? "message-user" : "message-ai"}`}>
        {/* TODO #13 — Render the message content here */}
        {/* Hint: access message.content */}
        <strong>{isUser ? "You" : "AI"}</strong>
        <br />
        {message.content}
      </div>
    </div>
  );
};

export default MessageBubble;
