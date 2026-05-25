// This file handles all communication between React frontend and Express backend
// All fetch calls to the backend go here — never call fetch directly in components

const BASE_URL = "http://localhost:5000/api";

// TODO #8 — Complete this function
// It should:
// 1. Make a POST request to `${BASE_URL}/chat`
// 2. Send headers: { "Content-Type": "application/json" }
// 3. Send body as JSON: { message, history }
// 4. Parse the response as JSON and return it
// 5. If the response is not ok (res.ok === false), throw a new Error with the message from the response body
// Use async/await and try/catch

export const sendChatMessage = async (message, history) => {
  try {
    const response = await fetch(`${BASE_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history })
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch response");
    }
    return data;
  } catch (err) {
    throw err;
  }
};
