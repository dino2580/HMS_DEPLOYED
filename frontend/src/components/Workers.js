import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUsers, faSadTear, faFileAlt, faUsersCog, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Workers() {
  return (
    <div className="h-100vh px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto">
        <div className="flex justify-center items-start gap-8">

        <nav className="w-1/5 md:w-1/4 h-full bg-gray-800 p-8 rounded-lg">
                    <ul className="text-white">
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md">
                            <FontAwesomeIcon className="mr-2" icon={faChartBar} />
                            Analytics
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md" >
                        <Link to="/Student" className="flex items-center text-white">
                            <FontAwesomeIcon className="mr-2" icon={faUsers} />
                                Students
                            </Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md" >
                        <Link to="/Complaints" className="flex items-center text-white">
                            <FontAwesomeIcon className="mr-2" icon={faUsers} />
                                Complaints
                            </Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md">
                            <FontAwesomeIcon className="mr-2" icon={faFileAlt} />
                            Fee Details
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer transition duration-300 rounded-md" >
                        <Link to="/Workers" className="flex items-center text-white">
                            <FontAwesomeIcon className="mr-2" icon={faUsers} />
                                Workers Details 
                            </Link>
                        </li>
                    </ul>
                </nav>

          <div className="w-full md:w-3/4 mt-4 md:mt-0">
            <div className="px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
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
                      <input className="pl-8 w-full md:w-[400px] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white dark:bg-gray-900 dark:text-gray-100" placeholder="Search..." type="search" />
                    </div>
                    <div>
                      <table className="w-full md:w-[calc(100% + 4rem)] border border-gray-200 rounded-md">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr className="text-gray-400">
                            <th className="py-2 px-4 text-center">Sr.No.</th>
                            <th className="py-2 px-4 text-center">Name</th>
                            <th className="py-2 px-4 text-center">Email</th>
                            <th className="py-2 px-4 text-center">Contact</th>
                            <th className="py-2 px-4 text-center">Post</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <TableRow id="1" name="John Doe" email="john@example.com" conatct="122" post="man" />
                          <TableRow id="1" name="John Doe" email="john@example.com" conatct="122" post="man" />
                          <TableRow id="1" name="John Doe" email="john@example.com" conatct="122" post="man" />
                          <TableRow id="1" name="John Doe" email="john@example.com" conatct="122" post="man" />
                          <TableRow id="1" name="John Doe" email="john@example.com" conatct="122" post="man" />
                          <TableRow id="1" name="John Doe" email="john@example.com" conatct="122" post="man" />
        
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

function TableRow({ id, name, email, contact, post }) {
  return (
    <tr className="text-gray-200">
      <td className="py-2 px-4 text-center">{id}</td>
      <td className="py-2 px-4 text-center">{name}</td>
      <td className="py-2 px-4 text-center">{email}</td>
      <td className="py-2 px-4 text-center">{contact}</td>
      <td className="py-2 px-4 text-center">{post}</td>
      
      
    </tr>
  );
}
