import React, { useEffect, useRef } from "react";

function MessageList({ messages, loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
        >
          {msg.text}
        </div>
      ))}

      {loading && <div className="chat-message bot">Typing...</div>}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default MessageList;