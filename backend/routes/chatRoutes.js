const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        reply: "Please enter a message."
      });
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return res.status(500).json({
        reply: "OpenRouter API key is missing in backend .env file."
      });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/free",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful AI assistant. Give short, clear, simple answers."
          },
          {
            role: "user",
            content: message
          }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Gym Chatbot"
        }
      }
    );

    const reply =
      response?.data?.choices?.[0]?.message?.content ||
      "No response received from AI.";

    return res.json({ reply });
  } catch (error) {
    console.error(
      "OpenRouter Error:",
      error.response?.data || error.message
    );

    return res.status(500).json({
      reply: "Sorry, chatbot is not working right now."
    });
  }
});

module.exports = router;