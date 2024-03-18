import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

const ChatRoom = () => {
    const { group_id } = useParams(); // Get group_id from URL params
    const [chatMessages, setChatMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const socket = io('http://localhost:5000');

    useEffect(() => {
        // Join the group
        joinGroup();
    
        // Listen for incoming messages
        socket.on("message", (data) => {
            setChatMessages((messages) => [...messages, data]);
        });
    
        // Clean up: Disconnect socket when component unmounts
        return () => {
            socket.disconnect();
        };
    }, [group_id]);
    
    // Connect to the chatroom when group_id changes
    const joinGroup = (e) => {
        //e.preventDefault();
        socket.emit("joinGroup",group_id);
        
      };
      const handleMessageSend = () => {
        // Send message to the server
        socket.emit("message", { message: messageInput, group_id });
        setMessageInput("");
    };
    

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-4">Chat Room</div>
            <div className="max-h-48 overflow-y-auto mb-4">
                {/* Render chat messages here */}
                <h3>{group_id}</h3>
                {chatMessages.map((message, index) => (
                    <div key={index} className="mb-2">{message.message}</div>
                ))}
            </div>
            <div className="flex">
                <input 
                    type="text" 
                    placeholder="Type your message here" 
                    className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none" 
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                />
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
                    onClick={handleMessageSend}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;
