import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUsers, faSadTear, faFileAlt, faUsersCog, faPlus } from '@fortawesome/free-solid-svg-icons';
import ComplaintForm from './ComplaintForm';

function Dashboard() {
    const totalComplaints = 50;
    const solvedComplaints = 40;
    const pendingComplaints = 10;
    const [showComponent, setShowComponent] = useState(false);

    const toggleComplaintForm = () => {
        setShowComponent(true);
    };

    return (
        <div className="px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto mt-8">
            <div className="flex justify-center items-start gap-8">
                <nav className="w-1/5 md:w-1/4 h-full bg-gray-800 p-8 rounded-lg">
                    <ul className="text-white">
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md">
                            <FontAwesomeIcon className="mr-2" icon={faChartBar} />
                            Analytics
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md">
                            <FontAwesomeIcon className="mr-2" icon={faUsers} />
                            Students
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md">
                            <FontAwesomeIcon className="mr-2" icon={faSadTear} />
                            Complaints
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md">
                            <FontAwesomeIcon className="mr-2" icon={faFileAlt} />
                            Fee Details
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md">
                            <FontAwesomeIcon className="mr-2" icon={faUsersCog} />
                            Workers Details
                        </li>
                    </ul>
                </nav>
                <div className="w-full md:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
                            <h2 className="text-xl font-semibold mb-4 text-white">Occupancy Rate</h2>
                            <div className="flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full border-4 border-gray-200 flex items-center justify-center hover:bg-gray-800 transition duration-300">
                                    <span className="text-3xl font-semibold text-cyan-300">75%</span>
                                </div>
                            </div>
                            <p className="text-sm text-cyan-300 mt-2">Currently occupied rooms</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
                            <h2 className="text-xl font-semibold mb-4 text-white">Present Students</h2>
                            <div className="flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full border-4 border-gray-200 flex items-center justify-center hover:bg-gray-800 transition duration-300">
                                    <span className="text-3xl font-semibold text-cyan-300">120</span>
                                </div>
                            </div>
                            <p className="text-sm text-cyan-300 mt-2">No of Students present</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
                            <h2 className="text-xl font-semibold mb-4 text-white">Workers Details</h2>
                            <div className="flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full border-4 border-gray-200 flex items-center justify-center hover:bg-gray-800 transition duration-300">
                                    <span className="text-3xl text-purple-500 font-semibold">50</span>
                                </div>
                            </div>
                            <p className="text-sm text-purple-500 mt-2 mx-auto">Workers present</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl text-white font-semibold mb-4">Complaints</h2>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
                                <h3 className="text-lg text-white font-semibold mb-2">Total Complaints</h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-3xl font-semibold text-yellow-300">{totalComplaints}</p>
                                    <span className="text-sm text-yellow-300">+10% from last month</span>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
                                <h3 className="text-lg font-semibold mb-2 text-white">Solved Complaints</h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-3xl font-semibold text-green-400">{solvedComplaints}</p>
                                    <span className="text-sm text-green-400">-5% from last month</span>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
                                <h3 className="text-lg font-semibold mb-2 text-white">Pending Complaints</h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-3xl font-semibold text-red-500">{pendingComplaints}</p>
                                    <span className="text-sm text-red-500">+20% from last month</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300" onClick={toggleComplaintForm}>
                                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                                Register New Complaint
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showComponent && <ComplaintForm />}
        </div>
        </div>
    );
}

export default Dashboard;
