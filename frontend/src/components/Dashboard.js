import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faUsers,
  faSadTear,
  faFileAlt,
  faUsersCog,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ComplaintForm from "./ComplaintForm";
import Student from "./Student";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  faDollarSign,
  faExclamationCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./sidebar";

function Dashboard() {
  const totalComplaints = 50;
  const solvedComplaints = 40;
  const pendingComplaints = 10;
  const expectedfee = 1000000;
  const collectedfee = 600000;
  const reaminingfee = 400000;
  const [showComponent, setShowComponent] = useState(false);
  const toggleComplaintForm = () => {
    setShowComponent(true);
  };

  return (
    <div className="h-100vh p-4 bg-back ">
      <div className="container mx-auto ">
        <div className="flex justify-center items-start gap-8 mt-2">
          <Sidebar/>
          <div className="w-full md:w-5/6 bg-white p-8 rounded-xl bg-opacity-60">
            <div className="flex justify-center ">
              <h1 className="text-black text-2xl font-bold item-center mb-4 mt-0">
                Welcome back !{" "}
              </h1>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <h2 className="text-black text-xl font-semibold item-center mb-4 mt-0">
                Quick Insights{" "}
              </h2>
              <div className="bg-white px-7">
                <div className="grid grid-cols-3 md:grid-cols-3 gap-6 cursor-pointer">
                  <div className="bg-admin  p-6 rounded-lg   hover:shadow-2xl hover:bg-teal-300 transition ease-in-out  duration-800 flex flex-col">
                    <h2 className="text-xl font-semibold mb-4 text-black mx-auto">
                      Occupancy Rate
                    </h2>
                    <div className="flex items-center justify-center">
                      <div className="w-32 h-32">
                        <CircularProgressbar
                          value={75}
                          text={"75%"}
                          styles={buildStyles({
                            pathColor: "#4fd1c5",
                            textColor: "black",
                            trailColor: "#333",
                            strokeWidth: 10,
                          })}
                          strokeWidth={10}
                        />
                      </div>
                    </div>
                    <p className="text-md text-black mt-2 mx-auto ">
                      Currently occupied rooms
                    </p>
                  </div>
                  <div className="bg-admin  p-6 rounded-lg   hover:shadow-2xl hover:bg-teal-300 transition ease-in-out  duration-800 flex flex-col">
                    <h2 className="text-xl text-black font-semibold mb-4 mx-auto ">
                      Present Students
                    </h2>
                    <div className="flex items-center justify-center">
                      <div className="w-32 h-32">
                        <CircularProgressbar
                          value={80}
                          text={"80%"}
                          styles={buildStyles({
                            pathColor: "#fde047",
                            textColor: "black",
                            trailColor: "#333",
                            strokeWidth: 10,
                            fontWeight: "bold",
                          })}
                          strokeWidth={10}
                        />
                      </div>
                    </div>
                    <p className="text-md text-black mt-2 mx-auto">
                      Students present
                    </p>
                  </div>
                  <div className="bg-admin  p-6 rounded-lg   hover:shadow-2xl hover:bg-teal-300 transition ease-in-out  duration-800 flex flex-col">
                    
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-xl p-4">
              <h2 className="text-xl text-black font-semibold mb-4">
                Complaints
              </h2>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-admin  p-6 rounded-lg   hover:shadow-2xl hover:bg-teal-300 transition ease-in-out  duration-800 flex flex-col">
                  <h3 className="text-lg text-black font-semibold mb-2">
                    Total Complaints
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-semibold text-black">
                      {totalComplaints}
                    </p>
                    <span className="text-sm text-black">
                      +10% from last month
                    </span>
                  </div>
                </div>
                <div className="bg-admin  p-6 rounded-lg   hover:shadow-2xl hover:bg-teal-300 transition ease-in-out  duration-800 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Solved Complaints
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-semibold text-black">
                      {solvedComplaints}
                    </p>
                    <span className="text-sm text-black">
                      -5% from last month
                    </span>
                  </div>
                </div>
                <div className="bg-admin  p-6 rounded-lg   hover:shadow-2xl hover:bg-teal-300 transition ease-in-out  duration-800 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Pending Complaints
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-semibold text-black">
                      {pendingComplaints}
                    </p>
                    <span className="text-sm text-black">
                      +20% from last month
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="flex justify-end mt-6">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300" onClick={toggleComplaintForm}>
                                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                                Register New Complaint
                            </button>
                        </div> */}
            </div>
            <div className="mt-8 bg-white rounded-xl p-4 ">
            <h2 className="text-xl text-black font-semibold mb-4">
                Fee Details
              </h2>
                
              <div className="flex items-center space-x-40 px-10">
                <div className="w-32 h-32 relative">
                  <CircularProgressbar
                    value={50}
                    text={`50%`}
                    styles={buildStyles({
                      pathColor: "#fde047",
                      textColor: "black",
                      trailColor: "#333",
                      strokeWidth: 10,
                    })}
                    strokeWidth={10}
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <i className="fas fa-coins fa-lg text-yellow-500"></i>
                  </div>
                </div>
                <div className="flex space-x-8">
                  <div className="flex flex-col bg-admin px-4 py-2 rounded-xl hover:shadow-2xl hover:bg-teal-300 transition ease-in-out  duration-800">
                    <h3 className="text-lg text-black font-semibold mb-2">
                      Expected Fee
                    </h3>
                    <p className="text-center">7000</p>
                  </div>
                  <div className="flex flex-col bg-admin px-4 py-2 rounded-xl hover:shadow-2xl hover:bg-teal-300 transition ease-in-out  duration-800">
                    <h3 className="text-lg text-black font-semibold mb-2">
                      Collected Fee
                    </h3>
                    <p className="text-center">5000</p>
                  </div>
                  <div className="flex flex-col bg-admin px-4 py-2 rounded-xl hover:shadow-2xl hover:bg-teal-300 transition ease-in-out  duration-800">
                    <h3 className="text-lg text-black font-semibold mb-2">
                      Remaining Fee
                    </h3>

                    <p className="text-center">3000</p>
                  </div>
                </div>
              </div>

              <div className="fixed bottom-8 left-8">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-black py-2 px-4 rounded-full transition duration-300"
                  onClick={toggleComplaintForm}
                >
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
