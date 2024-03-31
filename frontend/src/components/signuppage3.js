import React, { useState,useEffect } from 'react';
import { BsFileCheck } from 'react-icons/bs';
import { Link } from "react-router-dom";
import MessageAlert from './statusmessage';

function Signup3() {
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirm_password(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({  password }), // Convert data to JSON string
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      setSignupSuccess(true);
    } else {
      setSignupSuccess(false); // Reset signup success state if response is not OK
    }
  
    console.log(signupSuccess);
  };
  

  

  return (
    <div>
     {signupSuccess && (
  <MessageAlert
    message="Signup successful! You can now login"
    type="success"
    icon={
      <svg
        className="h-6 w-6 inline-block mr-2 text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    }
    duration={5000} // Optional: auto-dismiss after 5 seconds
  />
)}

    <div> 
      <div className="bg-white shadow-md mx-auto max-w-fit flex items-center justify-center m-10" style={{borderRadius:'50px'}}>
        <div className='flex items-center justify-center max-w-[65vw]'>
        <div className='flex items-center justify-center hidden xl:block' >
                <img src="/signupimg2.jpg" alt="signupimg" className='mx-auto w-[130vw]' style={{borderBottomLeftRadius:'50px', borderTopLeftRadius:'50px'}} />
        </div>
          <form onSubmit={handleSubmit} className="space-y-3 px-8 flex flex-col w-[90vw]">
            <div>
              <label htmlFor="password" className="block text-gray-700 font-bold mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="w-full px-3 py-2 bg-slate-200 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirm_password}
                onChange={handleConfirmPasswordChange}
                required
                className="w-full px-3 py-2 bg-slate-200 rounded-md focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full mx-auto py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup3;