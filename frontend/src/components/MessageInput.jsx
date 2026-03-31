import React, { useState } from "react";

function MessageInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSendClick = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <div className="chat-input-area">
      <input
        type="text"
        placeholder="Ask anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
}

export default MessageInput;