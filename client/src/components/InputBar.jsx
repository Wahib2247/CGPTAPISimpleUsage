import { useState } from "react";

// InputBar handles user text input and the send button
// When the user submits, it calls onSend with the input value and clears the field

const InputBar = ({ onSend, isLoading }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    // TODO #14 — Complete this function
    // 1. If input is empty (after trimming), do nothing — return early
    // 2. Call onSend with the current input value
    // 3. Clear the input field by setting it to an empty string
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    // TODO #15 — Make pressing Enter (without Shift) submit the message
    // Hint: check e.key and e.shiftKey
    // If Enter is pressed without Shift, call handleSubmit()
    // Also call e.preventDefault() to stop a newline being added
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="input-area">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        disabled={isLoading}
        rows={1}
        className="glass-input"
      />
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="send-btn"
      >
        {isLoading ? "..." : "Send"}
      </button>
    </div>
  );
};

export default InputBar;
