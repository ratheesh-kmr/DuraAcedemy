import React, { useState, useRef, useEffect } from 'react';

const ChatBotComponent = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input.trim() };
    setMessages((msgs) => [...msgs, userMessage]);

    // Simple bot reply logic
    let botReply = 'Sorry, I did not understand that.';
    if (input.toLowerCase().includes('course')) {
      botReply = 'You can browse our courses at /courses';
    } else if (input.toLowerCase().includes('hello') || input.toLowerCase().includes('hi')) {
      botReply = 'Hi there! How can I help?';
    }

    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: 'bot', text: botReply }]);
    }, 1000);

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}>
      {open && (
        <div
          style={{
            width: '300px',
            height: '400px',
            background: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <div
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={() => setOpen(false)}
          >
            Chatbot (Click to Close)
          </div>

          <div
            ref={chatRef}
            style={{
              flex: 1,
              padding: '10px',
              overflowY: 'auto',
              backgroundColor: '#f9f9f9',
              fontSize: '14px',
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.from === 'bot' ? 'left' : 'right',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '8px 12px',
                    borderRadius: '15px',
                    backgroundColor: msg.from === 'bot' ? '#e1e1e1' : '#007bff',
                    color: msg.from === 'bot' ? 'black' : 'white',
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div style={{ padding: '10px', borderTop: '1px solid #ddd' }}>
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '20px',
                border: '1px solid #ccc',
                outline: 'none',
              }}
            />
          </div>
        </div>
      )}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          aria-label="Open chatbot"
        >
          💬 Chat
        </button>
      )}
    </div>
  );
};

export default ChatBotComponent;
