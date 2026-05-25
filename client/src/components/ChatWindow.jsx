import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

// ChatWindow displays the scrollable list of messages
// It should automatically scroll to the bottom when new messages arrive

const ChatWindow = ({ messages, isLoading, error }) => {
  const bottomRef = useRef(null);

  // TODO #16 — Auto scroll to bottom when messages change
  // Use a useEffect that watches the `messages` array
  // Inside it, call bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  // This scrolls to the invisible div at the bottom of the list
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="chat-window">
      {messages.length === 0 && (
        <div
          style={{
            textAlign: "center",
            color: "var(--color-purple)",
            marginTop: "40px",
            fontSize: "15px",
            opacity: 0.8,
            fontWeight: 500,
          }}
        >
          Start a conversation...
        </div>
      )}

      {/* TODO #17 — Render the messages list */}
      {/* Map over the messages array and render a MessageBubble for each one */}
      {/* Each MessageBubble receives: message={msg} */}
      {/* Use the array index as the key for now: key={index} */}
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
      {isLoading && (
        <div style={{ textAlign: "left", color: "var(--text-muted)", fontSize: "14px", padding: "8px", fontStyle: "italic" }}>
          AI is thinking...
        </div>
      )}

      {error && (
        <div style={{ color: "#e11d48", fontSize: "14px", padding: "8px", fontWeight: 500 }}>
          Error: {error}
        </div>
      )}

      {/* This empty div is the scroll target */}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatWindow;
