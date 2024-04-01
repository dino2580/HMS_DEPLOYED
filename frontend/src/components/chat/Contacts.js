import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Contacts({ changeChat }) {
  const [currentSelected, setCurrentSelected] = useState(null);
  const [groups, setGroups] = useState([]);
  const [isJoin, setIsJoin] = useState(true);
  const [userGroups, setUserGroups] = useState([]);
  const [notJoinedUserGroups, setNotJoinedUserGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch groups
        const responseGroups = await fetch("http://localhost:5000/api/auth/getgroup");
        if (!responseGroups.ok) {
          throw new Error("Failed to fetch groups");
        }
        const groupsData = await responseGroups.json();
        setGroups(groupsData);
        
        // Fetch user groups
        const userId = localStorage.getItem("userId");
        const responseUserGroups = await fetch(`http://localhost:5000/api/auth/getusergroups/${userId}`);
        if (!responseUserGroups.ok) {
          throw new Error("Failed to fetch user groups");
        }
        const userGroupsData = await responseUserGroups.json();
        setUserGroups(userGroupsData);
        
        
        // Calculate not joined user groups
        const notJoined = groupsData.filter(group => !userGroupsData.some(userGroup => userGroup._id === group._id));
        setNotJoinedUserGroups(notJoined);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // console.log(groups)
  // console.log(userGroups)
  console.log(notJoinedUserGroups)

  const changeCurrentChat = (index, contact, e) => {
    e.preventDefault();
    setCurrentSelected(index);
    changeChat(contact);
  };

  const handleJoin = () => {
    setIsJoin(false);
  };

  return (
    <div className="bg-indigo-900 ">
      <div className="grid grid-rows-10-85-5 overflow-hidden w-83">
        <div className="flex items-center justify-gap-2 p-4 ">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=1"
            alt="logo"
            className="h-12"
          />
          <h3 className="text-white uppercase">snappy</h3>
        </div>
        <div className="overflow-auto max-h-[78vh] scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent scrollbar-hidden bg-white">
          {userGroups.map((group, index) => (
            <div
              key={group._id}
              className={`flex items-center justify-between py-4 px-4 cursor-pointer transition-colors duration-500 border-r border-t border-indigo-800    ${
                index === currentSelected ? "bg-indigo-400" : "bg-slate-200 "
              }`}
              onClick={(e) => changeCurrentChat(index, group, e)}
            >
              <div className="flex items-start gap-4 ">
                <div className="w-14 h-14">
                  <img src={""} alt="" className="w-full h-full rounded-full" />
                </div>
                <h3 className="text-black">{group.group_name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-8 left-8">
          {isJoin ? (
            <button onClick={handleJoin} className="bg-blue-500 hover:bg-blue-600 text-black py-2 px-4 rounded-full transition duration-300">
              <span>
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                Show not Joined group
              </span>
            </button>
          ) : (
            <div className="overflow-auto max-h-[78vh] scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent scrollbar-hidden bg-white">
              <p>Not joined group</p>
              {notJoinedUserGroups.map((group, index) => (
                <div
                  key={group._id}
                  className={`flex items-center justify-between py-4 px-4 cursor-pointer transition-colors duration-500 border-r border-t border-indigo-800    ${
                   "bg-slate-200 "
                  }`}
                  
                 
                >
                  <button  onClick={(e) => {}}>Join now</button>
                  <div className="flex items-start gap-4 ">
                    <div className="w-14 h-14">
                      <img src={""} alt="" className="w-full h-full rounded-full" />
                    </div>
                    <h3 className="text-black">{group.group_name}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
