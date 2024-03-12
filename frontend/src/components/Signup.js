import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    rollNo: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match. Please make sure they match.");
      return;
    }
    console.log(formData);
    
  };

  return (
    <div className="px-4 py-6 md:px-6 xl:py-12 2xl:py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <div className="flex justify-center items-center">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to Visvesvaraya Bhawan H-10
        </h2>
        </div>
        <div className="flex justify-center items-center">
        <p className="text-neutral-600 text-sm max-w-sm mt-2  font-bold  dark:text-neutral-300">
          We are happy to see you in NIT KURUKSHETRA
        </p>
        </div>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="firstName" className="text-sm font-bold text-neutral-700">First name</label>
              <input 
                
                id="firstName" 
                name="firstName"
                type="text" 
                placeholder="Yash" 
                value={formData.firstName} 
                onChange={handleChange} 
                className="input-field rounded-full px-4 py-1 focus:border-indigo-500 transition duration-300 ease-in-out " 
                required 
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="lastName" className="text-sm font-bold text-neutral-700">Last name</label>
              <input 
                id="lastName" 
                name="lastName"
                type="text" 
                placeholder="Vishnoi" 
                value={formData.lastName} 
                onChange={handleChange} 
                className="input-field rounded-full px-4 py-1  focus:border-gray-800 transition duration-300 ease-in-out" 
                required 
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="email"  className="text-sm font-bold text-neutral-700">Email Address</label>
            <input 
              id="email" 
              name="email"
              type="email" 
              placeholder="myprofile@gmail.com" 
              value={formData.email} 
              onChange={handleChange} 
              className="input-field rounded-full px-4 py-1  focus:border-gray-800 transition duration-300 ease-in-out" 
              required 
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="rollNo"  className="text-sm font-bold text-neutral-700">Roll No</label>
            <input 
              id="rollNo" 
              name="rollNo"
              type="text" 
              placeholder="Enter your roll number" 
              value={formData.rollNo} 
              onChange={handleChange} 
              className="input-field rounded-full px-4 py-1  focus:border-gray-800 transition duration-300 ease-in-out" 
              required 
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="password"  className="text-sm font-bold text-neutral-700">Password (min. 8 characters)</label>
            <input 
              id="password" 
              name="password"
              type="password" 
              placeholder="••••••••" 
              value={formData.password} 
              onChange={handleChange} 
              className="input-field rounded-full px-4 py-1  focus:border-gray-800 transition duration-300 ease-in-out hover:shadow-md" 
              minLength="8" 
              required 
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="confirmPassword"  className="text-sm font-bold text-neutral-700">Confirm Password</label>
            <input 
              id="confirmPassword" 
              name="confirmPassword"
              type="password" 
              placeholder="••••••••" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              className="input-field rounded-full px-4 py-1  focus:border-gray-800 transition duration-300 ease-in-out" 
              minLength="8" 
              required 
            />
          </div>

          <div className="flex justify-center items-center">
  <button className="btn bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white hover:text-white font-medium py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out" type="submit">
    Sign up &rarr;
  </button>
</div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
