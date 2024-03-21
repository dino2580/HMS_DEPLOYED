import React, { useState } from "react";

export default function Contacts({ changeChat }) {
  const [currentSelected, setCurrentSelected] = useState(null);

  const contacts = [
    { _id: 1, username: "Alice", avatarImage: "https://avatar.iran.liara.run/public/boy?username=1" },
    { _id: 2, username: "Bob", avatarImage: "https://via.placeholder.com/150" },
    { _id: 2, username: "Bob", avatarImage: "https://via.placeholder.com/150" },
    { _id: 2, username: "Bob", avatarImage: "https://via.placeholder.com/150" },
    { _id: 2, username: "Bob", avatarImage: "https://via.placeholder.com/150" },
    { _id: 2, username: "Bob", avatarImage: "https://via.placeholder.com/150" },
    { _id: 2, username: "Bob", avatarImage: "https://via.placeholder.com/150" },
    { _id: 2, username: "Bob", avatarImage: "https://via.placeholder.com/150" },
    { _id: 2, username: "Bob", avatarImage: "https://via.placeholder.com/150" },
    // ... (other contacts omitted for brevity)
  ];

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <div className="grid grid-rows-10-85-5 overflow-hidden bg-gray-900 scrollbar-hidden w-83"> {/* Decreased width */}
      <div className="flex items-center justify- gap-2 p-4">
        {/* Replace with actual logo import */}
        <img src="https://avatar.iran.liara.run/public/boy?username=1" alt="logo" className="h-12" />
        <h3 className="text-white uppercase">snappy</h3>
      </div>
      <div className="overflow-auto max-h-96 scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent scrollbar-hidden"> {/* Increased height */}
        {contacts.map((contact, index) => (
          <div
            key={contact._id}
            className={`flex items-center justify-between py-2 px-4 cursor-pointer transition-colors duration-500 ${
              index === currentSelected ? "bg-gray-800" : "bg-gray-700"
            }`}
            onClick={() => changeCurrentChat(index, contact)}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12">
                <img
                  src={contact.avatarImage}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <h3 className="text-white">{contact.username}</h3>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
