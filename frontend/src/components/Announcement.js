import React, { useState, useEffect } from "react";

export default function Announcement() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [menuData, setMenuData] = useState(null);
  // const [hostelNo, setHostelNo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(
    currentDate.toISOString().split("T")[0]
    );
   
  
  console.log(currentDate);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = currentDate.getDay();
  console.log(daysOfWeek[dayIndex]);

  useEffect(() => {
    const hostel_no=localStorage.getItem('hostel_no');
    // setHostelNo(hostel_no);
    console.log("hey"+hostel_no);
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/getmenu",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ day: daysOfWeek[dayIndex],hostel_no:hostel_no}),
            credentials: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setMenuData(data);
          console.log(menuData);
        } else {
          console.error("Failed to fetch menu:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu(); // Fetch menu initially

    const intervalId = setInterval(() => {
      const currentDateWithOffset = new Date();
      const offsetInMinutes = currentDateWithOffset.getTimezoneOffset();
      const offsetInMilliseconds = offsetInMinutes * 60000;
      const currentDateGMT530 = new Date(currentDateWithOffset.getTime() + offsetInMilliseconds + (5.5 * 60 * 60000)); // Adding 5 hours and 30 minutes
    
      setCurrentDate(currentDateGMT530);
      fetchMenu(); // Fetch menu every minute
    }, 60000);
    return () => clearInterval(intervalId);
  }, [dayIndex]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setCurrentDate(new Date(event.target.value));
  };
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="grid max-w-5xl gap-6 mx-auto lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4 lg:order-2 lg:col-start-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white dark:text-gray-100">
              Today's Menu
            </h1>
            <div className="abc flex justify-between">
              <p className="text-gray-300 dark:text-gray-400">
                {daysOfWeek[dayIndex]} , {formatDate(currentDate)}
              </p>
              <input
                type="date"
                id="date"
                value={selectedDate}
                defaultValue={currentDate.toISOString().split("T")[0]}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <h2 className="font-semibold text-white dark:text-gray-100">
                  Breakfast
                </h2>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {menuData ? menuData.breakfast : "Loading..."}
                </p>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {menuData ? menuData.breakfast_extra : "Loading..."}
                </p>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <h2 className="font-semibold text-white dark:text-gray-100">
                  Lunch
                </h2>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {menuData ? menuData.lunch : "Loading..."}
                </p>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {menuData ? menuData.lunch_extra : "Loading..."}
                </p>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <h2 className="font-semibold text-white dark:text-gray-100">
                  Snacks
                </h2>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {menuData ? menuData.snacks : "Loading..."}
                </p>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <h2 className="font-semibold text-white dark:text-gray-100">
                  Dinner
                </h2>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {menuData ? menuData.dinner : "Loading..."}
                </p>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  {menuData ? menuData.dinner_extra : "Loading..."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white dark:text-gray-100">
              Announcements
            </h1>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white dark:text-gray-100">
                New House Rules for Common Room
              </h2>
              <p className="text-gray-300 dark:text-gray-400">
                Posted 2 hours ago
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white dark:text-gray-100">
                New House Rules for Common Room
              </h2>
              <p className="text-gray-300 dark:text-gray-400">
                Posted 2 hours ago
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white dark:text-gray-100">
                New House Rules for Common Room
              </h2>
              <p className="text-gray-300 dark:text-gray-400">
                Posted 2 hours ago
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800" />

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white dark:text-gray-100">
                Upcoming Trip to the Mountains
              </h2>
              <p className="text-gray-300 dark:text-gray-400">
                Posted 1 day ago
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white dark:text-gray-100">
                Movie Night in the Hostel Auditorium
              </h2>
              <p className="text-gray-300 dark:text-gray-400">
                Posted 3 days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
