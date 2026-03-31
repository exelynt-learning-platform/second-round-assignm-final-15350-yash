import React, { useState } from "react";
import axios from "axios";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "./ChatBox.css";

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Ask me anything."
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = async (message) => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        message
      });

      const botMessage = {
        sender: "bot",
        text: response.data.reply
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, chatbot is not working right now."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className={`chat-toggle-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "💬"}
      </button>

      <div className={`chat-container ${isOpen ? "show" : "hide"}`}>
        <div className="chat-header">
          <span>AI Chatbot</span>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        <MessageList messages={messages} loading={loading} />
        <MessageInput onSend={handleSend} />
      </div>
    </>
  );
}

export default ChatBox;