import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBed, faScroll,faFile,faUserGroup, faAddressBook,faFaceFrown, faUser,faUserGraduate,faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ComplaintForm from './ComplaintForm';
import Dashboard from './Dashboard';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showComplaintForm, setShowComplaintForm] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleComplaintForm = () => {
        setShowComplaintForm(!showComplaintForm);
    };

    return (

        <div className="flex flex-col h-screen bg-black">
             // HORIZONTAL NAV BEGINS
            <nav className="bg-gray-800 p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#" className="text-white text-lg font-bold">Logo</a>
                        {/* <img src="images\LOGO.png" alt="logo" /> */}
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
            // HORIZONTAL NAV ENDS
            <div className='flex h-screen ml-4 mb-8'>
                <nav className='bg-gray-800 p-4  '>
                    <div className='max-w-xl'>
                        <ul className='text-white'>
                            <li className='py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md'> <FontAwesomeIcon className='mr-1' icon={faChartSimple} />Analytics</li>
                            <li className='py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md'><FontAwesomeIcon className='mr-1' icon={faUserGraduate} />Students</li>
                            <li className='py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md' onClick={toggleComplaintForm}><FontAwesomeIcon className='mr-1'  icon={faFaceFrown}  />Complaints</li>
                            <li className='py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md'><FontAwesomeIcon className='mr-1' icon={faFile} /> Fee Details</li>
                            <li className='py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md'><FontAwesomeIcon className='mr-1' icon={faUserGroup} />Workers Details</li>
                        </ul>
                    </div>
                </nav>
            </div>
            {showComplaintForm && <ComplaintForm />}
        </div>


    );
}

export default Navbar;

