import { useState } from "react";
import { sendChatMessage } from "../services/api";

// This custom hook manages all chat logic
// Components just call this hook — they don't need to know about API calls or state management

export const useChat = () => {
  const [messages, setMessages] = useState([]); // { role: "user" | "assistant", content: string }[]
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (userInput) => {
    if (!userInput.trim()) return;

    // Add user message to UI immediately
    const userMessage = { role: "user", content: userInput };

    // TODO #9 — Update the messages state to include the new userMessage
    // Hint: use setMessages with the spread operator to add to existing messages
    // Pattern: setMessages(prev => [...prev, newItem])
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // TODO #10 — Call sendChatMessage from the api service
      // Pass: userInput as the message, and the current messages array as history
      // Store the result in a variable called `data`
      // Then extract data.reply and create an assistant message:
      // { role: "assistant", content: data.reply }
      // Add it to messages state using setMessages the same way as TODO #9
      const data = await sendChatMessage(userInput, messages);
      const assistantMessage = { role: "assistant", content: data.reply };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      // TODO #11 — Set isLoading back to false
      // This must happen whether the request succeeded or failed
      // That's why it's in the finally block
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    // TODO #12 — Reset messages, error, and isLoading back to their initial values
    setMessages([]);
    setError(null);
    setIsLoading(false);
  };

  return { messages, isLoading, error, sendMessage, clearChat };
};
