import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage'   // FIXED PATH
import './ChatMessages.css';

function useAutoScroll(chatMessages) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chatMessages]);

  return containerRef;
}

export function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll(chatMessages); // FIXED

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
           time={chatMessage.time}
        />
      ))}
    </div>
  );
}
