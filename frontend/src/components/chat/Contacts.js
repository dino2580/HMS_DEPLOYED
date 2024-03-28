import React, { useState } from "react";

export default function Contacts({ changeChat }) {
  const [currentSelected, setCurrentSelected] = useState(null);

  const contacts = [
    { _id: 1, username: "Alice", avatarImage: "https://avatar.iran.liara.run/public/boy?username=1" },
    { _id: 2, username: "Bob", avatarImage: "profile.jpeg" },
    { _id: 2, username: "Bob", avatarImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" },
    { _id: 2, username: "Bob", avatarImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" },
    { _id: 2, username: "Bob", avatarImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" },
    { _id: 2, username: "Bob", avatarImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" },
    { _id: 2, username: "Bob", avatarImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" },
    { _id: 2, username: "Bob", avatarImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" },
    { _id: 2, username: "Bob", avatarImage: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" },
    // ... (other contacts omitted for brevity)
  ];

  const changeCurrentChat = (index, contact,e) => {
    e.preventDefault();
    setCurrentSelected(index);
    changeChat(contact);
    
  };

  return (
    <div className="bg-indigo-900 "> {/* Added bg-gray-900 class */}
      <div className="grid grid-rows-10-85-5 overflow-hidden w-83  "> {/* Decreased width */}
        <div className="flex items-center justify-gap-2 p-4 ">
          {/* Replace with actual logo import */}
          <img src="https://avatar.iran.liara.run/public/boy?username=1" alt="logo" className="h-12" />
          <h3 className="text-white uppercase">snappy</h3>
        </div>
        <div className="overflow-auto max-h-[78vh] scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent scrollbar-hidden bg-white"> {/* Increased height */}
          {contacts.map((contact, index) => (
            <div
              key={contact._id}
              className={`flex items-center justify-between py-4 px-4 cursor-pointer transition-colors duration-500 border-r border-t border-indigo-800    ${
                index === currentSelected ? "bg-indigo-400" : "bg-slate-200 "
              }`}
              onClick={(e) => changeCurrentChat(index, contact,e)}
            >
              <div className="flex items-start gap-4 ">
                <div className="w-14 h-14"> {/* Increased height */}
                  <img
                    src={contact.avatarImage}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </div>
                <h3 className="text-black">{contact.username}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
