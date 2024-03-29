import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUsers, faSadTear, faFileAlt, faUsersCog, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './sidebar';
import Sidebardashboard from './sidebardashboard';

export default function Complaintsdashboard() {
  const [complaints, setComplaints] = useState([]);
  // const hostel_no = localStorage.getItem('hostel_no');
  const {hostel_no}=useParams();


  const getComplaints = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/getcomplaint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({hostel_no} )
      });

      if (response.ok) {
        const data = await response.json();
        setComplaints(data);
      } else {
        console.error('Failed to fetch complaints:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  useEffect(() => {
    getComplaints();
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <Sidebardashboard hostel_no={hostel_no} />
          <div className="w-full md:w-3/4 mt-4 md:mt-0">
            <div className="px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="max-w-full">
                <div className="grid gap-6 md:gap-12">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white dark:text-gray-100">
                        Total Complaints
                      </h1>
                    </div>
                    <div className="relative w-full">
                      <FontAwesomeIcon icon={faSearch} className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <input className="pl-8 w-full md:w-[400px] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white dark:bg-gray-900 dark:text-gray-100" placeholder="Search..." type="search" />
                    </div>
                    <div>
                      <table className="w-full md:w-[calc(100% + 4rem)] border border-gray-200 rounded-md overflow-hidden">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr className="text-gray-400">
                            <th className="py-2 px-4 text-center">Sr.No.</th>
                            <th className="py-2 px-4">Type</th>
                            <th className="py-2 px-4">Id</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">Problem Information</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {complaints.filter((complaint)=>complaint.hostel_no==hostel_no). map((complaint, index) => (
                            <TableRow
                              key={index}
                              id={index + 1}
                              Type={complaint.complaint_type}
                              Id={complaint.complaint_id}
                              Status={complaint.complaint_status}
                              problemDescription={complaint.complaint_message}
                              hostel_no={complaint.hostel_no}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow({ id, Type, Id, Status, problemDescription,hostel_no }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleReadMore = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <tr className="text-gray-200 bg-gray-800 rounded-lg my-4">
      <td className="py-2 px-4 text-center rounded-l-lg">{id}</td>
      <td className="py-2 px-4 text-center">{Type}</td>
      <td className="py-2 px-4 text-center">{hostel_no}</td>
      <td className="py-2 px-4 text-center">{Status ? "Resolved" : "Not Resolved"}</td>
      <td className="py-2 px-4 text-center relative rounded-r-lg">
        {problemDescription ? (
          showFullDescription ? (
            <div>
              <p>{problemDescription}</p>
              <button
                className="text-blue-500 hover:text-blue-700 mt-2"
                onClick={handleReadMore}
              >
                Read Less
              </button>
            </div>
          ) : (
            <div>
              <p>{`${problemDescription.slice(0, 50)}...`}</p>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={handleReadMore}
              >
                Read More
              </button>
            </div>
          )
        ) : (
          <p>No description available</p>
        )}
      </td>
    </tr>
  );
}
