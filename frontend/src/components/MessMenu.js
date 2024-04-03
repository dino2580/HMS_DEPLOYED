import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavRules from "./NavRules";

const menuData = [
  {
    day: "Monday",
    breakfast: "Idli, Sambar, Chutney, Bread, Butter, Jam",
    lunch: "Veg Biryani, Curd, Salad, Pickle",
    dinner: "Chapati, Chicken Curry, Dal, Veg Curry, Rice, Curd",
  },
  {
    day: "Tuesday",
    breakfast: "Pongal, Chutney, Bread, Butter, Jam",
    lunch: "Veg Fried Rice, Gobi Manchurian, Salad, Pickle",
    dinner: "Chapati, Fish Curry, Dal, Veg Curry, Rice, Curd",
    bgColor: "bg-[#F59E0B] text-white",
  },
  {
    day: "Wednesday",
    breakfast: "Poori, Potato Masala, Chutney, Bread, Butter, Jam",
    lunch: "Veg Pulao, Raita, Salad, Pickle",
    dinner: "Chapati, Mutton Curry, Dal, Veg Curry, Rice, Curd",
    bgColor: "bg-gray-100/50 ",
  },
  {
    day: "Thursday",
    breakfast: "Upma, Chutney, Bread, Butter, Jam",
    lunch: "Lemon Rice, Potato Fry, Salad, Pickle",
    dinner: "Chapati, Egg Curry, Dal, Veg Curry, Rice, Curd",
  },
  {
    day: "Friday",
    breakfast: "Dosa, Chutney, Bread, Butter, Jam",
    lunch: "Veg Noodles, Manchurian, Salad, Pickle",
    dinner: "Chapati, Veg Curry, Dal, Chicken Curry, Rice, Curd",
    bgColor: "bg-gray-100/50 ",
  },
  {
    day: "Saturday",
    breakfast: "Idiyappam, Kurma, Chutney, Bread, Butter, Jam",
    lunch: "Veg Biryani, Curd, Salad, Pickle",
    dinner: "Chapati, Fish Curry, Dal, Veg Curry, Rice, Curd",
  },
  {
    day: "Sunday",
    breakfast: "Pongal, Chutney, Bread, Butter, Jam",
    lunch: "Veg Fried Rice, Gobi Manchurian, Salad, Pickle",
    dinner: "Chapati, Chicken Curry, Dal, Veg Curry, Rice, Curd",
    bgColor: "bg-gray-100/50 ",
  },
];

export default function MessMenu() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOnLeave, setIsOnLeave] = useState(false);
  const [leaveStartDate, setLeaveStartDate] = useState(null);
  const [leaveEndDate, setLeaveEndDate] = useState(null);
  const [leaveMessage, setLeaveMessage] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRebateClick = () => {
    const currentHour = currentTime.getHours();
    if (!isOnLeave) {
      if (currentHour < 7) {
        setIsOnLeave(true);
        setLeaveStartDate(currentTime);
        setLeaveEndDate(null);
        setLeaveMessage(
          `You are on leave from ${currentTime.toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          })}`
        );
      } else {
        const nextDay = new Date(currentTime);
        nextDay.setDate(nextDay.getDate() + 1);
        nextDay.setHours(0, 0, 0, 0);
        setIsOnLeave(true);
        setLeaveStartDate(nextDay);
        setLeaveEndDate(null);
        setLeaveMessage(
          `You are on leave from ${nextDay.toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          })}`
        );
      }
    } else {
      if (leaveEndDate && leaveEndDate < leaveStartDate) {
        setLeaveMessage("Your rebate is cancelled.");
      } else {
        setIsOnLeave(false);
        setLeaveEndDate(currentTime);
        setLeaveMessage(
          `You were on leave from ${leaveStartDate.toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          })} to ${currentTime.toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          })}`
        );
      }
    }
  };

  return (
    <div className="bg-back flex relative">
      <NavRules/>
      <div className="absolute top-4 right-4 text-blue-800 font-bold">
        <span className="text-lg">
          {currentTime.toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <div className="mx-auto w-full max-w-3xl px-4">
        <div className="flex flex-col gap-2 py-6">
          <h1 className="text-3xl font-bold leading-none text-center text-blue-800 ">
            Mess Menu
          </h1>
          <div className="flex justify-end">
            <button
              className={`${
                isOnLeave ? "bg-green-700 hover:bg-green-800" : "bg-red-700 hover:bg-red-800"
              } text-white transition duration-300 py-2 px-4 rounded-xl`}
              onClick={handleRebateClick}
            >
              Rebate
            </button>
          </div>
          {leaveMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4">
              <span className="block sm:inline">{leaveMessage}</span>
            </div>
          )}
          <div className="overflow-auto ">
          <table className="w-full text-sm border divide-y divide-gray-200  shadow-lg rounded-lg">


              <thead>
                <tr className="text-gray-500 bg-gray-100/50 ">
                  <th className="px-4 py-2 first:pl-2 text-black text-md font-bold">Day</th>
                  <th className="px-4 py-2 text-black font-bold">Breakfast</th>
                  <th className="px-4 py-2 text-black font-bold">Lunch</th>
                  <th className="px-4 py-2 last:pr-2 text-black font-bold">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {menuData.map((item, index) => (
                  <tr key={index} className={item.bgColor || ""}>
                    <td className="font-medium px-4 py-4 first:pl-4 ">
                      {item.day}
                    </td>
                    <td className="px-4 py-4 ">{item.breakfast}</td>
                    <td className="px-4 py-4">{item.lunch}</td>
                    <td className="px-4 py-4 last:pr-4">{item.dinner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}