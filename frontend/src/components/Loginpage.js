import React, { useState, useEffect } from "react";

const Login = ({handleSubmit}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    handleSubmit(formData); // Call the parent handleSubmit function with form data
  };

  return (
    <div className="px-4 py-6 min-h-svh md:px-6 xl:py-12 2xl:py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <div className="flex justify-center items-center">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome back !
        </h2>
        </div>
        <div className="flex justify-center items-center">
        <p className="text-neutral-600 text-sm max-w-sm mt-2  font-bold  dark:text-neutral-300">
        Step into your hostel life. Login and make memories!
        </p>
        </div>

        <form className="my-8" onSubmit={handleSubmit}>
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
            <label htmlFor="password"  className="text-sm font-bold text-neutral-700">Password </label>
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

          <div className="flex justify-center items-center">
  <button className="btn bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white hover:text-white font-medium py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out" type="submit">
    Login &rarr;
  </button>
</div>
        </form>
      </div>
    </div>
  );
};

export default Login;