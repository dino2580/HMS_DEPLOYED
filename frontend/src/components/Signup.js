import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        rollNo: '',
        branch: '',
        address: '',
        phone: '',
        dob: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-slate-500'>
        <h1 className=' text-white text-center text-3xl font-bold'>Signup</h1>
        <div className=' w-full flex'>
            <div className='w-1/2 ml-40 my-10  bg-white p-6 rounded-l-md shadow-md'>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name:</label>
                            <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} className='mt-1 p-2 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Enter your name' required />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='rollNo' className='block text-sm font-medium text-gray-700'>Roll No:</label>
                            <input type='text' id='rollNo' name='rollNo' value={formData.rollNo} onChange={handleChange} className='mt-1 p-2 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Enter your roll number' required />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='branch' className='block text-sm font-medium text-gray-700'>Branch:</label>
                            <input type='text' id='branch' name='branch' value={formData.branch} onChange={handleChange} className='mt-1 p-2 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Enter your branch' required />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='address' className='block text-sm font-medium text-gray-700'>Address:</label>
                            <textarea id='address' name='address' value={formData.address} onChange={handleChange} rows='4' className='mt-1 p-2 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Enter your address' required />
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className='w-1/2 mr-40 my-10  bg-white p-6 rounded-r-md shadow-md flex flex-col'>
                {/* Right half content */}
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className='mb-4'>
                            <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>Phone No:</label>
                            <input type='tel' id='phone' name='phone' value={formData.phone} onChange={handleChange} className='mt-1 p-2 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Enter your phone number' required />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='dob' className='block text-sm font-medium text-gray-700'>Date of Birth:</label>
                            <input type='date' id='dob' name='dob' value={formData.dob} onChange={handleChange} className='mt-1 p-2 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Enter your date of birth' required />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password:</label>
                            <input type='password' id='password' name='password' value={formData.password} onChange={handleChange} className='mt-1 p-2 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Enter your password' required />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>Confirm Password:</label>
                            <input type='password' id='confirmPassword' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} className='mt-1 p-2 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Confirm your password' required />
                        </div>
                        <div className='flex items-center justify-center'>
                            <button type='submit' className='px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg'>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Signup;
