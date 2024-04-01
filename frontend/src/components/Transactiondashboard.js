import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import { useParams } from "react-router-dom";
import Sidebardashboard from "./sidebardashboard";

function Transactiondashboard() {
  const { hostel_no } = useParams();
  const [entries, setEntries] = useState([]);

  const [totalTransactions, setTotalTransactions] = useState(entries.length);
  const [totalCollection, setTotalCollection] = useState(30);
  const [expectedCollection, setExpectedCollection] = useState(30);
  const [searchTxId, setSearchTxId] = useState("");
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/auth/gettransactionshostel/${hostel_no}`
        );
        if (response.ok) {
          const data = await response.json();
          const { transactions, users } = data;

          // Map transactions with user details
          const entriesWithUsers = transactions.map((transaction) => {
            // Find the corresponding user details for the transaction
            const user = users.find((user) => user._id === transaction.user_id);
            // Assuming the user details contain the full name, room number, and email
            return {
              T_id: transaction.T_id,
              name: user.full_name,
              amount: transaction.amount,
              date: transaction.createdAt,
              remark: transaction.status,
              room: user.room_number,
              contact_email: user.email,
            };
          });
          // console.log(data.users);
          
          // Map transactions with user details
          // console.log(entriesWithUsers);
          setEntries(entriesWithUsers);
          setTotalTransactions(data.transactions.length);
          // Calculate total collection and expected collection if needed
        } else {
          throw new Error("Failed to fetch transactions");
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
    fetchCollection();
  }, [hostel_no]);
  const fetchCollection=async()=>
  {
    
    const response = await fetch(`http://localhost:5000/api/auth/gethostelaccount/${hostel_no}`);
    if(response.ok)
    {
      const data=await response.json();
      console.log(data);
      setTotalCollection(data.hostel_paid);
      setExpectedCollection(data.hostel_dues);
    }

  }
  const handleVerify = async (index) => {
    try {
      const updatedEntries = [...entries];
      updatedEntries[index].remark = 'Verified';
      
      setEntries(updatedEntries);
  
      const transactionId = entries[index].T_id;
      const status = 'Verified'; // Assuming 'deleted' is the status to be sent
      // console.log(transactionId);
      const response = await fetch('http://localhost:5000/api/auth/updatetransactionstatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ T_id: transactionId, status }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update transaction status');
      }
  
      // Transaction status updated successfully
    } catch (error) {
      console.error('Error updating transaction status:', error);
    }
    fetchCollection()
  };
  

  const handleDelete = async (index) => {
    try {
      const updatedEntries = [...entries];
      updatedEntries[index].remark = 'Failed';
      
      setEntries(updatedEntries);
  
      const transactionId = entries[index].T_id;
      const status = 'Failed'; // Assuming 'deleted' is the status to be sent
  
      const response = await fetch('http://localhost:5000/api/auth/updatetransactionstatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ T_id: transactionId, status }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update transaction status');
      }
  
      // Transaction status updated successfully
    } catch (error) {
      console.error('Error updating transaction status:', error);
    }
    fetchCollection();
  };
  

  return (
    <div className="min-h-screen px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto flex">
        <Sidebardashboard hostel_no={hostel_no} />
        <div className="flex-1">
          <h1 className="text-3xl font-bold leading-none text-center text-blue-800 dark:text-blue-800 my-5">
            Transactions
          </h1>
          <div className="m-4 flex justify-end">
            <input
              type="text"
              placeholder="Search by Transaction ID"
              value={searchTxId}
              onChange={(e) => setSearchTxId(e.target.value)}
              className="bg-gray-100 placeholder-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-4"
            />
          </div>
          <div className="overflow-x-auto">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100/70">
                    <tr>
                      <th className="px-6 py-3 text-left text-black text-sm font-medium uppercase tracking-wider">
                        Transaction ID
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                        Room
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                        Contact Email.
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-slate-100 divide-y divide-gray-200">
                    {entries.map((entry, index) => (
                      <tr
                        key={index}
                        className={`${
                          entry.remark=='Verified'
                            ? "bg-green-200"
                            : entry.remark=='Failed'
                            ? "bg-red-200"
                            : ""
                        } shadow-lg`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {entry.T_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {entry.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          ₹{entry.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {entry.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {entry.remark}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {entry.room}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {entry.contact_email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          { (
                            <>
                              <svg
                                onClick={() => handleVerify(index)}
                                className="inline-block h-6 w-6 text-green-500 hover:text-green-700 cursor-pointer"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <svg
                                onClick={() => handleDelete(index)}
                                className="inline-block h-6 w-6 text-red-500 hover:text-red-700 cursor-pointer ml-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-center m-4">
            <div className="m-5 bg-teal-300 hover:bg-teal-400 transition duration-300 text-teal-800 rounded-md p-4 flex flex-col">
              <h3>Total Transactions</h3>
              <p className="text-4xl font-bold mr-4">{totalTransactions}</p>
            </div>
            <div className="m-5 bg-yellow-300 hover:bg-yellow-400 transition duration-300 text-blue-800 rounded-md p-4 flex flex-col">
              <h3>Total Collection</h3>
              <p className="text-4xl font-bold mr-4">₹{totalCollection}</p>
            </div>
            <div className="m-5 bg-orange-300 hover:bg-orange-400 transition duration-300 text-orange-800 rounded-md p-4 flex flex-col">
              <h3>Expected Collection</h3>
              <p className="text-4xl font-bold mr-4">₹{expectedCollection}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactiondashboard;
