import ChatWindow from "./components/ChatWindow";
import InputBar from "./components/InputBar";
import { useChat } from "./hooks/useChat";

// App is the root component — it wires everything together
// useChat hook provides all the state and logic
// ChatWindow displays messages
// InputBar handles user input

const App = () => {
  // TODO #18 — Destructure what you need from useChat()
  // You need: messages, isLoading, error, sendMessage, clearChat
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();

  return (
    <>
      {/* Animated Background */}
      <div className="bg-wrapper">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="chat-container glass-panel">
        {/* Header */}
        <div className="chat-header">
          <h1 className="chat-title">AI Chat</h1>
          <button onClick={clearChat} className="clear-btn">
            Clear
          </button>
        </div>

        {/* TODO #19 — Render ChatWindow and InputBar with the correct props */}
        {/* ChatWindow needs: messages, isLoading, error */}
        {/* InputBar needs: onSend (pass the sendMessage function), isLoading */}
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          error={error}
        />
        <InputBar
          onSend={sendMessage}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default App;
