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
      title: "Upcoming hostel event",
      author: "Admin",
      date: "2023-04-01T10:00:00",
      content:
        "Mark your calendars! We're hosting a hostel event on April 15th. There will be live music, food, and fun activities. Stay tuned for more details!",
    },
    {
      title: "New hostel rules",
      author: "Admin",
      date: "2023-03-25T14:00:00",
      content:
        "Please be aware of the new hostel rules that have been implemented. These rules are in place to ensure a safe and enjoyable experience for all our guests. You can find the complete list of rules on our website or at the front desk.",
    },
    {
      title: "Maintenance work scheduled",
      author: "Admin",
      date: "2023-04-10T09:00:00",
      content:
        "We would like to inform you that there will be maintenance work taking place in the hostel common areas on April 20th from 9 AM to 5 PM. We apologize for any inconvenience this may cause.",
    },
    {
      title: "Hostel tour available",
      author: "Admin",
      date: "2023-03-20T16:30:00",
      content:
        "Are you new to our hostel? Join us for a free tour every Saturday at 4 PM to get familiar with the facilities and amenities. Sign up at the front desk!",
    },
    {
      title: "Hostel tour available",
      author: "Admin",
      date: "2023-03-20T16:30:00",
      content:
        "Are you new to our hostel? Join us for a free tour every Saturday at 4 PM to get familiar with the facilities and amenities. Sign up at the front desk!",
    },
    {
      title: "Hostel tour available",
      author: "Admin",
      date: "2023-03-20T16:30:00",
      content:
        "Are you new to our hostel? Join us for a free tour every Saturday at 4 PM to get familiar with the facilities and amenities. Sign up at the front desk!",
    },
    {
      title: "Hostel tour available",
      author: "Admin",
      date: "2023-03-20T16:30:00",
      content:
        "Are you new to our hostel? Join us for a free tour every Saturday at 4 PM to get familiar with the facilities and amenities. Sign up at the front desk!",
    },
    {
      title: "Hostel tour available",
      author: "Admin",
      date: "2023-03-20T16:30:00",
      content:
        "Are you new to our hostel? Join us for a free tour every Saturday at 4 PM to get familiar with the facilities and amenities. Sign up at the front desk!",
    },
    // Add more announcements as needed
  ];

  // State for current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // State to control the number of visible announcements
  const [visibleAnnouncements, setVisibleAnnouncements] = useState(3);

  useEffect(() => {
    // Update current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleSeeMore = () => {
    setVisibleAnnouncements((prevCount) => prevCount + 5);
  };

  return (
    <div className="bg-back relative">
      <div className="absolute top-4 right-4  text-blue-800 font-bold ">
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
            <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-800 text-center tracking-tighter sm:text-4xl">
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
          {announcements.slice(0, visibleAnnouncements).map((announcement, index) => (
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
          {visibleAnnouncements < announcements.length && (
            <p
              className=" text-blue-700 font-bold  cursor-pointer scroll-hidden"
              onClick={handleSeeMore}
            >
              See More
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Announcement;