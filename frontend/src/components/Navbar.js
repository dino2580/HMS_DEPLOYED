import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faAddressBook, faBed, faFile, faScroll, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
                            {/* Your SVG icon here */}
                        </svg>
                    </button>
                </div>
                <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} md:justify-evenly md:space-x-10`}>
                    <li>
                        <Link to="/dashboard" className="text-white hover:text-gray-300 flex items-center hover:border border-gray-300 rounded-full px-2 py-1">
                            <FontAwesomeIcon icon={faChartLine} className="mr-1" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300 flex items-center hover:border border-gray-300 rounded-full px-2 py-1">
                            <FontAwesomeIcon icon={faBed} className="mr-1" />
                            Rooms
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300 flex items-center hover:border border-gray-300 rounded-full px-2 py-1">
                            <FontAwesomeIcon icon={faScroll} className="mr-1" />
                            Announcements
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300 flex items-center hover:border border-gray-300 rounded-full px-2 py-1">
                            <FontAwesomeIcon icon={faAddressBook} className="mr-1" />
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300 flex items-center hover:border border-gray-300 rounded-full px-2 py-1">
                            <FontAwesomeIcon icon={faUser} className="mr-1" />
                            Profile
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;