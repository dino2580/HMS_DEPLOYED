
import React from 'react';
import { faChartBar, faUsers, faSadTear, faFileAlt, faUsersCog, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';

const AdminDashboard = () => {
  const occupancyData = [
    { id: 1, name: 'Hostel 1', percentage: 50 },
    { id: 2, name: 'Hostel 2', percentage: 75 },
    { id: 3, name: 'Hostel 3', percentage: 95 },
  ];

  const getColorForPercentage = (percentage) => {
    if (percentage < 50) {
      return '#4fd1c5';
    } else if (percentage < 80) {
      return '#fde047';
    } else {
      return '#e53e3e';
    }
  };

return (
  <div className="min-h-screen px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          
            <Sidebar/>
          

          <div className="col-span-3 bg-gray-800 p-4 rounded-md">
            <div className='bg-gray-900 p-6 m-6 rounded-md'>
              <h2 className="text-lg font-bold mb-4 text-white">Occupancy</h2>
              <div className="flex justify-evenly ">
                {occupancyData.map((hostel) => (
                  <div key={hostel.id} className="text-center">
                    <div className="mb-2">
                      <p className="text-white font-bold">{hostel.name}</p>
                    </div>
                    <div className="w-32 h-32 "> {/* Increased size */}
                      <CircularProgressbar
                        value={hostel.percentage}
                        text={`${hostel.percentage}%`}

                        styles={buildStyles({
                          pathColor: getColorForPercentage(hostel.percentage),
                          textColor: 'white',
                          trailColor: '#333',
                          strokeWidth: 10, // Increased from 4 to 10
                        })}
                        strokeWidth={10} // Increased from 6 to 10
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>


<div className="m-6 bg-gray-900 p-6 rounded-md"> 
              <h2 className="text-lg font-bold mb-4 text-white">Fees Collection</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-48 h-48"> {/* Increased size */}
                  <CircularProgressbar
                    value={50}
                    text={'50%'}
                    styles={buildStyles({
                      pathColor: '#fde047',
                      textColor: 'white',
                      trailColor: '#e53e3e',
                      strokeWidth: 8, // Increased from 4 to 10
                    })}
                    strokeWidth={8} // Increased from 5 to 10
                  />
                </div>
                <div className="text-white">
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                    <span>Expected</span>
                    <FontAwesomeIcon icon={faCheckCircle} className="ml-2 text-green-500" />
                  </div>
                  <p>₹ 52,00,000</p>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                    <span>Remaining</span>
                    <FontAwesomeIcon icon={faCheckCircle} className="ml-2 text-green-500" />
                  </div>
                  <p>₹ 15,60,000</p>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                    <span>Collected</span>
                    <FontAwesomeIcon icon={faCheckCircle} className="ml-2 text-green-500" />
                  </div>
                  <p>₹ 26,00,000</p>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                    <span>Overdue</span>
                    <FontAwesomeIcon icon={faExclamationCircle} className="ml-2 text-red-500" />
                  </div>
                  <p>₹ 10,40,000</p>
                </div>
              </div>
            </div>

            <div className="m-6 p-6 bg-gray-900 rounded-md">
              <h2 className="text-lg font-bold mb-4 text-white">Complaints</h2>
              <div className="flex  items-center">
                <div className="h-12 w-48 bg-teal-500 rounded-l"></div> {/* Increased size */}
                <div className="h-12 w-12 bg-yellow-500 rounded-r"></div> {/* Increased size */}
                <div className="ml-4 text-white">
                  <div className='flex justify-evenly'> 
                  <div className='bg-black p-2 m-2 rounded-md  h-20' >
                  <p>Total Complaints</p>
                  <p >156</p>
                  </div>
                  <div className='bg-black p-2 m-2 rounded-md h-20'>
                  <p>Resolved </p>
                  <p>96</p>
                  </div>
                  <div className='bg-black p-2 m-2 rounded-md h-20 w-26'>
                  <p> Open</p>
                  <p> 62 </p>
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
};

export default AdminDashboard;