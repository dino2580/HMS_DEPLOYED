import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <div className="bg-gray-900 px-8 py-4 flex items-center">
      <div className="relative">
        <BsEmojiSmileFill
          onClick={handleEmojiPickerhideShow}
          className="text-yellow-400 cursor-pointer"
          style={{ fontSize: "1.5rem" }}
        />
        {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
      </div>
      <form onSubmit={(event) => sendChat(event)} className="flex-grow flex items-center ml-4">
        <input
          type="text"
          placeholder="Type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          className="flex-grow py-2 px-4 bg-gray-700 text-white rounded-lg focus:outline-none"
        />
        <button type="submit" className="ml-4 py-2 px-4 bg-purple-600 text-white rounded-lg">
          <IoMdSend className="text-2xl" />
        </button>
      </form>
    </div>
  );
}