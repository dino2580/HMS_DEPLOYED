import React, { useState } from 'react';

function ComplaintForm({ onClose }) {
    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [complaintType, setComplaintType] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        
        try {
            const response = await fetch('http://localhost:5000/api/auth/complaint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    rollNo,
                    complaintType,
                    message,
                }),
            });
            if (response.ok) {
                console.log('Complaint submitted successfully');
                onClose();
            } else {
                console.error('Failed to submit complaint');
            }
        } catch (error) {
            console.error('Error submitting complaint:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
            <div className="bg-slate-800 p-8 rounded-lg max-w-md shadow-md transform transition-all duration-500 flex flex-col">
                <h2 className="text-2xl font-bold mx-auto mb-4 text-zinc-50">Submit Complaint</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-md font-medium text-zinc-50">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="input-style border rounded-sm p-1 w-96"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rollNo" className="block text-md font-medium text-zinc-50">
                            Roll no.
                        </label>
                        <input
                            id="rollNo"
                            type="text"
                            className="input-style border rounded-sm p-1 w-96"
                            placeholder="Enter your Roll no."
                            value={rollNo}
                            onChange={(e) => setRollNo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="complaintType" className="block text-md font-medium text-zinc-50">
                            Complaint type
                        </label>
                        <select
                            id="complaintType"
                            className="input-style border rounded-sm text-black p-1 w-96"
                            value={complaintType}
                            onChange={(e) => setComplaintType(e.target.value)}
                            required
                        >
                            <option value="">Select complaint type</option>
                            <option value="Electricity Related">Electricity related</option>
                            <option value="Mess Related">Mess related</option>
                            <option value="Water Related">Water related</option>
                            <option value="Staff">Staff related</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-md font-medium text-zinc-50">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="input-style border rounded-sm p-1"
                            placeholder="Enter your message"
                            rows="5"
                            cols="48"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn-submit w-full bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ComplaintForm;
