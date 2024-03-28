import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUsers, faSadTear, faFileAlt, faUsersCog, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

export default function Workers() {
  const [workers, setWorkers] = useState([]);
  const hostel_no = localStorage.getItem('hostel_no');

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    try {
      const response = await fetch(' http://localhost:5000/api/auth/getworker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({hostel_no}),
      });
      if (response.ok) {
        const data = await response.json();
        setWorkers(data); // Assuming the response contains an array of workers
      } else {
        console.error('Failed to fetch workers');
      }
    } catch (error) {
      console.error('Error fetching workers:', error);
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
       <Sidebar/>

          <div className="w-full md:w-3/4 mt-8 md:mt-0">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6">
              <div className="max-w-full">
                <div className="grid gap-6 md:gap-12">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white dark:text-gray-100">
                        Workers Information
                      </h1>
                    </div>
                    <div className="relative w-full">
                      <FontAwesomeIcon icon={faSearch} className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <input className="pl-8 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white dark:bg-gray-900 dark:text-gray-100" placeholder="Search..." type="search" />
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full border border-gray-200 rounded-md overflow-hidden">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr className="text-gray-400">
                            <th className="py-2 px-4 text-center">Index</th>
                            <th className="py-2 px-4 text-center">Name</th>
                            <th className="py-2 px-4 text-center">Email</th>
                            <th className="py-2 px-4 text-center">Contact</th>
                            <th className="py-2 px-4 text-center">Post</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {workers.map((worker, index) => (
                            <TableRow key={index} index={index + 1} {...worker} />
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

function TableRow({ index, w_name, w_email, contact_no, w_post }) {
  return (
    <tr className="text-gray-200 bg-gray-800 rounded-lg my-4 md:table-row flex flex-col md:flex-row">
      <td className="py-4 px-4 text-center rounded-l-lg md:rounded-none">{index}</td>
      <td className="py-4 px-4 text-center">{w_name}</td>
      <td className="py-4 px-4 text-center">{w_email}</td>
      <td className="py-4 px-4 text-center">{contact_no}</td>
      <td className="py-4 px-4 text-center rounded-r-lg md:rounded-none">{w_post}</td>
    </tr>
  );
}
