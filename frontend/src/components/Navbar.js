import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faAddressBook,
  faBed,
  faFile,
  faScroll,
  faUser,
  faSignIn,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isAdmin = localStorage.getItem("admin") === "true";
  const isSuperAdmin = localStorage.getItem("superadmin") === "true";
  const isCookie = localStorage.getItem("cookie");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" bg-5522a3 p-6 shadow-lg bg-gradient-to-r from-5522a3 to-indigo-600" >
      <div className="navbar-items max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white flex text-lg font-bold">
            Logo
          <p className="ml-2 text-white text-lg font-bold"> HMS</p>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } md:justify-evenly md:space-x-10 md:items-center`}
        >
          
          {isSuperAdmin && (
            <li className="relative group">
              <NavLink
                to="/admindashboard"
                activeClassName="text-indigo-600"
                className="text-white  "
              >
                <FontAwesomeIcon icon={faChartLine} className="mr-1 bg-white text-purple-600 text-sm p-1 rounded-md" />

                adminDashboard
              </NavLink>
              <span className="absolute left-0 bottom-0 h-0.5 bg-transparent group-hover:bg-purple-500 w-0 group-hover:w-full transition-all duration-1000"></span>
            </li>
          )}
          
          {isCookie&&<li className="relative group">
            <NavLink
              to="/announcement"
              activeClassName="text-indigo-600"
              className="text-white "
            >
              <FontAwesomeIcon icon={faScroll} className="mr-1 bg-white text-purple-600 text-sm p-1 rounded-md" />
              Announcements
            </NavLink>
            <div className="absolute left-0 bottom-0 h-0.5 bg-transparent group-hover:bg-purple-500 w-0 group-hover:w-full transition-all duration-1000"></div>
          </li>}
          <li className="relative group">
            <NavLink
              to="/mess"
              activeClassName="text-indigo-600"
              className="text-white  "
            >
              <FontAwesomeIcon icon={faUtensils} className="mr-1 bg-white text-purple-600 text-sm p-1 rounded-md" />
              Mess
            </NavLink>
            <span className="absolute left-0 bottom-0 h-0.5  bg-transparent group-hover:bg-purple-500 w-0 group-hover:w-full transition-all duration-1000"></span>
          </li>
          {isAdmin &&<li className="relative group">
            <NavLink
              to="/rooms"
              activeClassName="text-indigo-600"
              className="text-white "
            >
              <FontAwesomeIcon icon={faBed} className="mr-1 bg-white text-purple-600 p-1 text-sm rounded-md" />
              Rooms
            </NavLink>
            <span className="absolute left-0 bottom-0 h-0.5 bg-transparent group-hover:bg-purple-500 w-0 group-hover:w-full transition-all duration-1000"></span>
          </li>}
          {!isSuperAdmin&&<li className="relative group">
            <NavLink
              to="/home"
              activeClassName="text-indigo-600"
              className="text-white "
            >
              <FontAwesomeIcon icon={faAddressBook} className="mr-1 bg-white text-purple-600 text-sm p-1 rounded-md" />
              Contact Us
            </NavLink>
            <span className="absolute left-0 bottom-0 h-0.5 bg-transparent group-hover:bg-purple-500 w-0 group-hover:w-full transition-all duration-1000"></span>
          </li>}
          
          {!isSuperAdmin&&<li className="relative group">
            <NavLink
              to="/aboutus"
              activeClassName="text-indigo-600"
              className="text-white  "
            >
              <FontAwesomeIcon icon={faUser} className="mr-1 bg-white text-purple-600 text-sm p-1 rounded-md" />
              About Us
            </NavLink>
            <span className="absolute left-0 bottom-0 h-0.5  bg-transparent group-hover:bg-purple-500 w-0 group-hover:w-full transition-all duration-1000"></span>
          </li>}
          {isCookie&&<li className="relative group">
            <NavLink
              to="/profile"
              activeClassName="text-indigo-600"
              className="text-white  "
            >
              <FontAwesomeIcon icon={faUser} className="mr-1 bg-white text-purple-600 text-sm p-1 rounded-md" />
              Profile
            </NavLink>
            <span className="absolute left-0 bottom-0 h-0.5  bg-transparent group-hover:bg-purple-500 w-0 group-hover:w-full transition-all duration-1000"></span>
          </li>}
          {!isCookie && (
            <li className="relative group">
              <NavLink
                to="/login"
                activeClassName="text-indigo-600"
                className="text-white border border-35353F  rounded-full px-2 py-1 flex items-center transition-all duration-200"
                style={{ maxWidth: "40rem" }}
              >
                <FontAwesomeIcon icon={faSignIn} className="mr-1 bg-white text-purple-600 text-sm p-1 rounded-md" />
                Login
              </NavLink>
              <span className="absolute left-0 bottom-0 h-0.5 bg-transparent group-hover:bg-purple-500 w-0 group-hover:w-full transition-all duration-1000"></span>
            </li>
          )}

          {!isCookie && (
            <li className="relative group">
              <NavLink
                to="/signUp"
                activeClassName="text-indigo-600"
                className="text-white border border-35353F  rounded-full px-2 py-1 flex items-center"
              >
                <FontAwesomeIcon icon={faSignIn} className="mr-1 bg-white text-purple-600 text-sm p-1 rounded-md" />
                Signup
              </NavLink>
              <span className="absolute left-0 bottom-0 h-0.5 bg-transparent group-hover:bg-purple-500 w-0 group-hover:w-full transition-all duration-1000"></span>
            </li>
          )}
          {isCookie && (
            <li className="relative group">
              <NavLink
                to="/chatgroup"
                activeClassName="text-indigo-600"
                className="text-white"
              >
                <FontAwesomeIcon icon={faSignIn} className="mr-1 bg-white text-purple-600 text-sm p-1 rounded-md" />
                chats
              </NavLink>
              <span className="absolute left-0 bottom-0 h-0.5 bg-transparent group-hover:bg-purple-500 w-0 group-hover:w-full transition-all duration-1000"></span>
            </li>
          )}
          {isCookie && (
            <li className="relative group">
              <label
                htmlFor="hey"
                activeClassName="text-indigo-600"
                className="text-white "
                onClick={async () => {
                  try {
                    const response = await fetch(
                      "http://localhost:5000/api/auth/logout",
                      {
                        method: "POST", // Or 'GET', 'PUT', 'DELETE', etc. depending on your server setup
                        credentials: "include", // Include cookies in the request
                      }
                    );

                    if (response.ok) {
                      // localStorage.setItem("admin", false);
                      // localStorage.setItem("Email", "");
                      // localStorage.setItem("cookie","");
                      // localStorage.setItem("userId","");
                      // localStorage.setItem("full_name","");
                      // localStorage.setItem("hostel_no","");
                      // localStorage.setItem("superadmin",false);
                      localStorage.clear();
                      console.log("Logout successful");
                      window.location.href = "/login";
                      // Optionally, redirect the user to the login page or perform any other action after logout
                    } else {
                      console.error("Logout failed:", response.statusText);
                      // Handle unsuccessful logout (display error message, etc.)
                    }
                  } catch (error) {
                    console.error("Error logging out:", error);
                    // Handle error as needed
                  }
                }}
              >
                logout
              </label>
              <span className="absolute left-0 bottom-0 h-0.5 bg-transparent group-hover:bg-purple-500 w-0 group-hover:w-full transition-all duration-1000"></span>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
 