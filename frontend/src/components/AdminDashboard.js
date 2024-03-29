import React, { useEffect,useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faExclamationCircle, faCheckCircle,faBed } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './sidebar';
import { NavLink,Link } from 'react-router-dom';



const AdminDashboard = () => {
  const [hostelsData, setHostelsData] = useState([]);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchAllHostels = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/getallhostels');
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setHostelsData(data);
        } else {
          console.error('Failed to fetch all hostels');
        }
      } catch (error) {
        console.error('Error fetching all hostels:', error);
      }
    };
    const fetchAllComplaints = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/getallcomplaints');

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setComplaints(data);
        } else {
          console.error('Failed to fetch complaints');
        }
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };
    
    

    fetchAllComplaints();

    fetchAllHostels();
  }, []);
  const calculateComplaintStats = (complaints) => {
    let total = 0;
    let solved = 0;
    let unsolved = 0;
  
    complaints.forEach(complaint => {
      total++;
      if (complaint.complaint_status) {
        solved++;
      } else {
        unsolved++;
      }
    });
  
    return { total, solved, unsolved };
  };
  let { total, solved, unsolved } = calculateComplaintStats(complaints);
  
  console.log(total+"j"+solved+"d"+unsolved)
  const calculateOccupancyPercentage = (occupiedRooms, total_rooms) => {
    return ((occupiedRooms / total_rooms) * 100).toFixed(2);
};

const occupancyData = hostelsData.map((hostel, index) => ({
    id: index + 1,
    name: hostel.hostel_name,
    hostel_no:hostel.hostel_no,
    percentage: calculateOccupancyPercentage(hostel.occupied_rooms, hostel.total_rooms)
}));

console.log('Occupancy Data:', occupancyData);

 

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
          <div className="flex justify-evenly">
  {occupancyData.map((hostel) => (
    <div key={hostel.id} className="flex">
      <NavLink
        to={`/admindashboard/${hostel.hostel_no}`} // Include the id parameter in the URL
        activeClassName="text-indigo-600"
        className="text-white flex flex-col items-center justify-center"
      >
        <div className="text-center">
          <div className="mb-2">
            <p className="text-white">{hostel.name}</p>
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
          <div className="mb-2">
            <p className="text-white text-bold">{hostel.hostel_no}</p>
          </div>
        </div>
      </NavLink>
    </div>
  ))}
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
  <div className="flex items-center">
    <div className="h-12" style={{ width: `${(total / 100) * 48}%`, backgroundColor: '#4fd1c5', borderTopLeftRadius: '0.375rem', borderBottomLeftRadius: '0.375rem' }}></div>
    <div className="h-12" style={{ width: `${(solved / 100) * 48}%`, backgroundColor: '#fde047' }}></div>
    <div className="ml-4 text-white">
      <div className='flex justify-evenly'>
        <div className='bg-black p-2 m-2 rounded-md' style={{ height: `${(total / 200) * 40}rem` }}>
          <p>Total Complaints</p>
          <p>{total}</p>
        </div>
        <div className='bg-black p-2 m-2 rounded-md' style={{ height: `${(solved / 200) * 40}rem` }}>
          <p>Resolved</p>
          <p>{solved}</p>
        </div>
        <div className='bg-black p-2 m-2 rounded-md' style={{ height: `${(unsolved / 200) * 40}rem`, width: `${(unsolved / 100) * 26}%` }}>
          <p>Open</p>
          <p>{unsolved}</p>
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