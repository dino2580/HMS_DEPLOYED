// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye } from "@fortawesome/free-solid-svg-icons";

// export default function Announcement() {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [menuData, setMenuData] = useState(null);
//   // const [hostelNo, setHostelNo] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(
//     currentDate.toISOString().split("T")[0]
//     );
   
  
//   // console.log(currentDate);
//   const daysOfWeek = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const [announcementData, setAnnouncementData] = useState([]);
//   const dayIndex = currentDate.getDay();
//   // console.log(daysOfWeek[dayIndex]);

//   useEffect(() => {
//     const hostel_no=localStorage.getItem('hostel_no');
//     // setHostelNo(hostel_no);
//     // console.log("hey"+hostel_no);
//     const fetchAnnouncement = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/auth/getannouncements",
//           {
//             method: "POST",
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ hostel_no:hostel_no}),
//             credentials: "include",
//           }
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setAnnouncementData(data);
//           //console.log(data);
          
//         } else {
//           console.error("Failed to fetch menu:", response.statusText);
//         }
//       } catch (error) {
//         console.error("Error fetching menu:", error);
//       }
//     };
   
//     const fetchMenu = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/auth/getmenu",
//           {
//             method: "POST",
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ day: daysOfWeek[dayIndex],hostel_no:hostel_no}),
//             credentials: "include",
//           }
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setMenuData(data);
//           // console.log(menuData);
//         } else {
//           console.error("Failed to fetch menu:", response.statusText);
//         }
//       } catch (error) {
//         console.error("Error fetching menu:", error);
//       }
//     };

//     fetchMenu(); // Fetch menu initially
//     fetchAnnouncement();
//     const intervalId = setInterval(() => {
//       const currentDateWithOffset = new Date();
//       const offsetInMinutes = currentDateWithOffset.getTimezoneOffset();
//       const offsetInMilliseconds = offsetInMinutes * 60000;
//       const currentDateGMT530 = new Date(currentDateWithOffset.getTime() + offsetInMilliseconds + (5.5 * 60 * 60000)); // Adding 5 hours and 30 minutes
    
//       setCurrentDate(currentDateGMT530);
//       fetchMenu(); // Fetch menu every minute
//     }, 60000);
//     return () => clearInterval(intervalId);
//   }, [dayIndex]);

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//     setCurrentDate(new Date(event.target.value));
//   };
//   const formatDate = (date) => {
//     const day = date.getDate().toString().padStart(2, "0");
//     const month = (date.getMonth() + 1).toString().padStart(2, "0");
//     const year = date.getFullYear().toString().slice(-2);
//     return ${day}/${month}/${year};
//   };
//   const calculateTimeElapsed = (createdAt) => {
//     const postedDate = new Date(createdAt);
//     const currentDate = new Date();
//     const timeDifference = Math.abs(currentDate - postedDate);
  
//     const seconds = Math.floor(timeDifference / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);
  
//     if (days > 0) {
//       return ${days} day${days > 1 ? 's' : ''} ago;
//     } else if (hours > 0) {
//       return ${hours} hour${hours > 1 ? 's' : ''} ago;
//     } else if (minutes > 0) {
//       return ${minutes} minute${minutes > 1 ? 's' : ''} ago;
//     } else {
//       return 'Just now';
//     }
//   };
//   const problemDescription ="SEEDHI SI BAAT HAI NAYA RULE YE HAI KI NET NHI AAYEGA JO KARNA HAI KR LO JITNA NET CHALANA HAI CHALA LO ABHI";
  

//   const [expandedAnnouncement, setExpandedAnnouncement] = useState(null);

//   const handleReadMore = (index) => {
//     setExpandedAnnouncement(index === expandedAnnouncement ? null : index);
//   };
  

//   return (
//     <div className="gradient -bg">
//     <div className="h-[92.2vh] px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-b from-black via-black to-#301370">
//       <div className="grid max-w-5xl gap-6 mx-auto lg:grid-cols-2 lg:gap-12">
//         <div className="space-y-4 lg:order-2 lg:col-start-2">
//           <div className="space-y-2">
//             <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white dark:text-gray-100">
//               Today's Menu
//             </h1>
//             <div className="abc flex justify-between">
//               <p className="text-gray-300 dark:text-gray-400">
//                 {daysOfWeek[dayIndex]} , {formatDate(currentDate)}
//               </p>
//               <input
//                 type="date"
//                 id="date"
//                 value={selectedDate}
//                 // defaultValue={currentDate.toISOString().split("T")[0]}
//                 onChange={handleDateChange}
//               />
//             </div>
//           </div>
//           <div className="space-y-4">
//             <div className="space-y-4">
//               <div className="grid grid-cols-3 items-center gap-4">
//                 <h2 className="font-semibold text-white dark:text-gray-100">
//                   Breakfast
//                 </h2>
//                 <p className="text-sm text-gray-300 dark:text-gray-400">
//                   {menuData ? menuData.breakfast : "Loading..."}
//                 </p>
//                 <p className="text-sm text-gray-300 dark:text-gray-400">
//                   {menuData ? menuData.breakfast_extra : "Loading..."}
//                 </p>
//               </div>
//               <div className="grid grid-cols-3 items-center gap-4">
//                 <h2 className="font-semibold text-white dark:text-gray-100">
//                   Lunch
//                 </h2>
//                 <p className="text-sm text-gray-300 dark:text-gray-400">
//                   {menuData ? menuData.lunch : "Loading..."}
//                 </p>
//                 <p className="text-sm text-gray-300 dark:text-gray-400">
//                   {menuData ? menuData.lunch_extra : "Loading..."}
//                 </p>
//               </div>
//               <div className="grid grid-cols-3 items-center gap-4">
//                 <h2 className="font-semibold text-white dark:text-gray-100">
//                   Snacks
//                 </h2>
//                 <p className="text-sm text-gray-300 dark:text-gray-400">
//                   {menuData ? menuData.snacks : "Loading..."}
//                 </p>
//               </div>
//               <div className="grid grid-cols-3 items-center gap-4">
//                 <h2 className="font-semibold text-white dark:text-gray-100">
//                   Dinner
//                 </h2>
//                 <p className="text-sm text-gray-300 dark:text-gray-400">
//                   {menuData ? menuData.dinner : "Loading..."}
//                 </p>
//                 <p className="text-sm text-gray-300 dark:text-gray-400">
//                   {menuData ? menuData.dinner_extra : "Loading..."}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="space-y-4">
//   <div>    
//   <h1 className="text-2xl font-bold text-white dark:text-gray-100">Announcements</h1> 
//   {announcementData && announcementData.map((announcement, index) => (
//     <div key={index} className="space-y-2">
//       <h2 className="text-2xl font-bold text-white dark:text-gray-100">
//         {announcement.title}
//       </h2>
//       <p className="text-gray-300 dark:text-gray-400">
//         {announcement.updatedAt===announcement.createdAt?"Created":"Updated"} {calculateTimeElapsed(announcement.updatedAt)} 
//       </p>
//       {announcement.announcement_message ? (
//   <div>
//     <p className="text-gray-300">
//       {expandedAnnouncement === index
//         ? announcement.announcement_message
//         :""}
//     </p>
//     <button
//       className="text-blue-500 hover:text-blue-700 mt-2"
//       onClick={() => handleReadMore(index)}
//     >
//       {expandedAnnouncement === index ? "Read Less" : "View More"}
//     </button>
//   </div>
// ) : null}
//       <div className="border-t border-gray-200 dark:border-gray-800" />
//     </div>
//   ))}
// </div>
// </div>
// </div>
// </div>
// </div>
// );
// }
/**
 * 
 * 
 * 
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

function Announcement() {
  // Array of announcements
  const announcements = [
    {
      title: "Hostel renovations are complete",
      author: "Admin",
      date: "2023-03-18T14:30:00", // Formatted as "YYYY-MM-DDTHH:mm:ss"
      content:
        "We're excited to announce that the renovations are complete! The common area has been refurbished and we've added new facilities for our guests. We can't wait for you to see the changes. Come and enjoy the new and improved hostel!",
    },
    {
      title: "Hostel renovations are complete",
      author: "Admin",
      date: "2023-03-18T14:30:00", // Formatted as "YYYY-MM-DDTHH:mm:ss"
      content:
        "We're excited to announce that the renovations are complete! The common area has been refurbished and we've added new facilities for our guests. We can't wait for you to see the changes. Come and enjoy the new and improved hostel!",
    },
    {
      title: "Hostel renovations are complete",
      author: "Admin",
      date: "2023-03-18T14:30:00", // Formatted as "YYYY-MM-DDTHH:mm:ss"
      content:
        "We're excited to announce that the renovations are complete! The common area has been refurbished and we've added new facilities for our guests. We can't wait for you to see the changes. Come and enjoy the new and improved hostel!",
    },
    {
      title: "Hostel renovations are complete",
      author: "Admin",
      date: "2023-03-18T14:30:00", // Formatted as "YYYY-MM-DDTHH:mm:ss"
      content:
        "We're excited to announce that the renovations are complete! The common area has been refurbished and we've added new facilities for our guests. We can't wait for you to see the changes. Come and enjoy the new and improved hostel!",
    },
    // Add more announcements as needed
  ];

  // State for current time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="bg-back relative">
      <div className="absolute top-4 right-4  text-gray-300 font-bold ">
        <span className="text-lg">
          {currentTime.toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            
          })}
        </span>
      </div>
      <main className="mx-auto grid max-w-7xl gap-6 lg:gap-10 px-4 lg:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col mt-6 gap-2 text-center">
            <h1 className="text-2xl font-bold text-white text-center tracking-tighter sm:text-4xl">
              Hostel Announcements
            </h1>
          </div>
        </div>
        <div className="grid gap-4 max-w-lg max-l-lg sm:max-w-lg md:max-w-500 border -black dark:border-black lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto bg-white p-10 rounded-md overflow-y-scroll h-screen mb-6 scrollbar-hidden">
          <div className="mt--1 flex items-center">
            <FontAwesomeIcon
              icon={faBullhorn}
              className="text-yellow-600 text-2xl dark:text-gray-400 mr-2"
            />
            <h5 className="text-black text-2xl font-bold dark:text-gray-400">
              Latest Hostel News
            </h5>
          </div>
          {/* Mapping through announcements */}
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="flex border border-5522a3 dark:border-5522a3 bg-gray-200 dark:bg-gray-950 rounded-lg shadow-lg transition-transform duration-300 ease-in-out drop-shadow-md"
            >
              <div className="flex flex-col justify-center px-4 py-2 bg-gray-300 dark:bg-gray-800 rounded-l-lg">
                <div className="text-gray-600 dark:text-gray-400">
                  <div className="text-sm font-bold">
                    {new Date(announcement.date).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold">{announcement.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    by {announcement.author}
                  </p>
                </div>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {announcement.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Announcement;




// function CogIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
//       <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
//       <path d="M12 2v2" />
//       <path d="M12 22v-2" />
//       <path d="m17 20.66-1-1.73" />
//       <path d="M11 10.27 7 3.34" />
//       <path d="m20.66 17-1.73-1" />
//       <path d="m3.34 7 1.73 1" />
//       <path d="M14 12h8" />
//       <path d="M2 12h2" />
//       <path d="m20.66 7-1.73 1" />
//       <path d="m3.34 17 1.73-1" />
//       <path d="m17 3.34-1 1.73" />
//       <path d="m11 13.73-4 6.93" />
//     </svg>
//   )
// }


// function HomeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   )
// }


// function LogOutIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//       <polyline points="16 17 21 12 16 7" />
//       <line x1="21" x2="9" y1="12" y2="12" />
//     </svg>
//   )
// }


// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   )
// }


// function UserCircleIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <circle cx="12" cy="10" r="3" />
//       <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
//     </svg>
//   )
// }


// function UserIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//       <circle cx="12" cy="7" r="4" />
//     </svg>
//   )
// }