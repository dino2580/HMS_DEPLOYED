import React, { useState } from "react";

function Transaction() {
  const [entries, setEntries] = useState([
    {
      T_id: 12345678,
      name: "Ramakant Sharma",
      amount: 156000,
      date: "12-Feb-2023",
      remark: "Fees",
      room: 112,
      contactNo: "5234564545",
    },
    {
      T_id: 12345678,
      name: "Ramakant Sharma",
      amount: 156000,
      date: "12-Feb-2023",
      remark: "Fees",
      room: 112,
      contactNo: "5234564545",
    },
    {
      T_id: 12345678,
      name: "Ramakant Sharma",
      amount: 156000,
      date: "12-Feb-2023",
      remark: "Fees",
      room: 112,
      contactNo: "5234564545",
    },
    {
      T_id: 12345678,
      name: "Ramakant Sharma",
      amount: 156000,
      date: "12-Feb-2023",
      remark: "Fees",
      room: 112,
      contactNo: "5234564545",
    },
    {
      T_id: 12345678,
      name: "Ramakant Sharma",
      amount: 156000,
      date: "12-Feb-2023",
      remark: "Fees",
      room: 112,
      contactNo: "5234564545",
    },
  ]);

  const [totalTransactions, settotalTransactions]=useState(entries.length);
  const [totalCollection, settotalCollection]=useState(30);
  const [expectedCollection, setexpectedCollection]=useState(30);


  const handleVerify = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index].isVerified = true;
    updatedEntries[index].isDeleted = false;
    setEntries(updatedEntries);
  };

  const handleDelete = (index) => {
    const updatedEntries = [...entries];
    updatedEntries[index].isDeleted = true;
    updatedEntries[index].isVerified = false;
    setEntries(updatedEntries);
  };

  const [searchTxId, setSearchTxId] = useState("");

  return (
    <div className="flex flex-col bg-back">
      <h1 className="text-3xl font-bold leading-none text-center text-blue-800 dark:text-blue-800 my-5">Transactions</h1>
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
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-black text-sm font-medium uppercase tracking-wider"
                  >
                    Transaction ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider"
                  >
                    Room
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider"
                  >
                    Contact No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-slate-100 divide-y divide-gray-200">
                {entries.map((entry, index) => (
                  <tr key={index}
                  className={`${
                    entry.isVerified
                      ? "bg-green-200"
                      : entry.isDeleted
                      ? "bg-red-200"
                      : ""
                  } shadow-lg`}>
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
                    <td className="px-6 py -4 whitespace-nowrap">
                      {entry.contactNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {!entry.isVerified && !entry.isDeleted && (
                        <>
                          <svg
                            onClick={() => handleVerify(index)}
                            className="inline-block h-6 w-6 text-green-500 hover:text-green-700 cursor-pointer"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            {/* Right Tick SVG */}
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
                            {/* Wrong Tick SVG */}
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
  );
}

export default Transaction;
