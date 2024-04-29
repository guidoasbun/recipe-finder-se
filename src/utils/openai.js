import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

const openaiImages = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY_IMAGES"],
});

export { openai, openaiImages };
