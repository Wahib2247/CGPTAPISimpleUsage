import openai from "../config/openai.js";

// This controller handles the POST /api/chat endpoint
// It receives a message and conversation history from the frontend
// Sends it to OpenAI and returns the AI response

export const sendMessage = async (req, res, next) => {
  try {
    const { message, history = [] } = req.body;

    // TODO #3 — Validate the incoming request
    // If `message` is missing or is an empty string, return a 400 status with:
    // { success: false, message: "Message is required" }
    // Hint: use res.status(400).json(...)
    if (!message || message.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    // This is the system prompt — it defines how the AI behaves
    const systemPrompt = {
      role: "system",
      content:
        "You are a helpful assistant. Answer clearly and concisely. If you don't know something, say so honestly.",
    };

    // TODO #4 — Build the messages array to send to OpenAI
    // It should contain THREE things in order:
    // 1. The systemPrompt above
    // 2. The conversation history (the `history` array from req.body) — spread it in
    // 3. The new user message as: { role: "user", content: message }
    // Store the result in a variable called `messages`

    const messages = [
      systemPrompt,
      ...history,
      { role: "user", content: message },
    ];

    // TODO #5 — Call the OpenAI API
    // Use the openai client imported at the top
    // Call openai.chat.completions.create() with:
    //   model: "gpt-4o-mini"  (cheaper model, good for testing)
    //   messages: the messages array you built above
    //   max_tokens: 500
    //   temperature: 0.7
    // Store the result in a variable called `completion`
    // Remember: this is an async call, use await
    // --- Mocking the OpenAI API Call ---
    // Since you have $0 credits, we will simulate an AI response.
    // This allows you to test the frontend UI without hitting the real API.
    // original api
    // const completion = await openai.chat.completions.create({
    //   model: "gpt-4o-mini",
    //   messages,
    //   max_tokens: 500,
    //   temperature: 0.7,
    // });
    // // This extracts the AI's reply text from the response
    // const reply = completion.choices[0].message.content;
    // Simulate a network delay (1.5 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Create a mock reply that echoes the user's message
    const reply = `(Mock AI) You said: "${message}". I would normally process this using OpenAI, but I am currently running in mock mode because there are no API credits!`;

    res.status(200).json({
      success: true,
      reply,
    });
  } catch (error) {
    // Pass any errors to the global error handler middleware
    next(error);
  }
};
