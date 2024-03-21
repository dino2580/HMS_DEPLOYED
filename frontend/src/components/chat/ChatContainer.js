import React, { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import { v4 as uuidv4 } from "uuid";

export default function ChatContainer({ currentChat, socket }) {
  const [messages, setMessages] = useState([
    // Static data for testing
    { fromSelf: false, message: "Hello!" },
    { fromSelf: true, message: "Hi there!" },
  ]);

  const scrollRef = useRef();

  const handleSendMsg = (msg) => {
    const newMessage = { fromSelf: true, message: msg };
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center px-8 py-4 bg-gray-800">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12">
            {/* Replace src with actual image source */}
            <img src="https://avatar.iran.liara.run/public/boy?username=1" alt="User Avatar" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-white">{currentChat.username}</h3>
          </div>
        </div>
        {/* <Logout /> */}
      </div>
      <div className="flex-grow overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-800">
        <div className="px-8 py-4 flex flex-col gap-4">
          {messages.map((message) => (
            <div key={uuidv4()} className={`flex ${message.fromSelf ? "justify-end" : "justify-start"}`}>
              <div className="max-w-2/5 overflow-hidden rounded-lg py-4 px-6 bg-gray-700">
                <p className="text-white">{message.message}</p>
              </div>
            </div>
          ))}
          <div ref={scrollRef}></div>
        </div>
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  );
}