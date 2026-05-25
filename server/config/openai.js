import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// TODO #1 — Initialize the OpenAI client here using the API key from environment variables
// Hint: new OpenAI({ apiKey: process.env.??? })
// Then export it so other files can use it

const openai = client; // replace this null with the actual OpenAI instance

export default openai;
