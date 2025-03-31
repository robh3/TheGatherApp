import React, { useState } from 'react';

// Mock chat data
const initialMessages = [
  {
    id: 1,
    sender: 'Maria Rodriguez',
    text: 'Hey everyone! Who\'s excited for the city tour this weekend?',
    timestamp: '2025-04-15T10:30:00Z'
  },
  {
    id: 2,
    sender: 'Jack Thompson',
    text: 'I can\'t wait! Any recommendations for comfortable walking shoes?',
    timestamp: '2025-04-15T10:35:00Z'
  }
];

function Chat() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState('You');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      sender: currentUser,
      text: newMessage,
      timestamp: new Date().toISOString()
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat-page container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Event Chat</h1>

      <div className="chat-container bg-white rounded-lg shadow-md overflow-hidden">
        {/* Chat Header */}
        <div className="chat-header bg-blue-600 text-white p-4">
          <h2 className="text-xl font-semibold">City Walking Tour Group</h2>
          <p className="text-sm">4 participants</p>
        </div>

        {/* Messages Area */}
        <div className="messages p-4 h-96 overflow-y-auto">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 ${message.sender === currentUser ? 'text-right' : 'text-left'}`}
            >
              <div className={`inline-block p-2 rounded-lg ${
                message.sender === currentUser 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-black'
              }`}>
                <div className="font-semibold text-sm mb-1">
                  {message.sender}
                </div>
                <div>{message.text}</div>
                <div className="text-xs mt-1 opacity-75">
                  {formatTimestamp(message.timestamp)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="chat-input border-t p-4 flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow border rounded-l-lg p-2"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;