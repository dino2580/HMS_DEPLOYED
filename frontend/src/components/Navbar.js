import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faAddressBook, faBed, faFile, faScroll, faUser, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" className="text-white text-lg font-bold">Logo</a>
                    <p className="ml-2 text-white text-lg font-bold"> HMS</p>
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
                <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} md:justify-evenly md:space-x-10 md:items-center`}>
                    <li>
                        <NavLink to="/dashboard" activeClassName="text-indigo-600" className="text-white hover:text-gray-300 hover:border border-gray-300 rounded-full px-2 py-1 flex items-center">
                            <FontAwesomeIcon icon={faChartLine} className="mr-1" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/rooms" activeClassName="text-indigo-600" className="text-white hover:text-gray-300 hover:border border-gray-300 rounded-full px-2 py-1 flex items-center">
                            <FontAwesomeIcon icon={faBed} className="mr-1" />
                            Rooms
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/announcement" activeClassName="text-indigo-600" className="text-white hover:text-gray-300 hover:border border-gray-300 rounded-full px-2 py-1 flex items-center">
                            <FontAwesomeIcon icon={faScroll} className="mr-1" />
                            Announcements
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home" activeClassName="text-indigo-600" className="text-white hover:text-gray-300 hover:border border-gray-300 rounded-full px-2 py-1 flex items-center">
                            <FontAwesomeIcon icon={faAddressBook} className="mr-1" />
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" activeClassName="text-indigo-600" className="text-white hover:text-gray-300 hover:border border-gray-300 rounded-full px-2 py-1 flex items-center">
                            <FontAwesomeIcon icon={faUser} className="mr-1" />
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="text-indigo-600" className="text-white hover:text-gray-300 hover:border border-gray-300 rounded-full px-2 py-1 flex items-center">
                            <FontAwesomeIcon icon={faSignIn} className="mr-1" />
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/signUp" activeClassName="text-indigo-600" className="text-white hover:text-gray-300 hover:border border-gray-300 rounded-full px-2 py-1 flex items-center">
                            <FontAwesomeIcon icon={faSignIn} className="mr-1" />
                            Signup
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
