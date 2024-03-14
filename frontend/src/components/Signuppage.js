import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    roll_no: "",
    email: "",
    password: "",
    gender: "",
    date_of_joining: "",
    profile_pic: "",
    currently_present: true,
    admin: false,
    room_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://example.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("User signed up successfully:", data);
      } else {
        console.error("Failed to sign up:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to sign up:", error);
    }
    // Reset form fields
    setFormData({
      full_name: "",
      roll_no: "",
      email: "",
      password: "",
      gender: "",
      date_of_joining: "",
      profile_pic: "",
      currently_present: true,
      admin: false,
      room_number: "",
    });
  };

  return (
<<<<<<< Updated upstream:frontend/src/components/Signuppage.js
    <div className="px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
=======
    <div className=" h-100vh px-4 py-6 md:px-6 xl:py-12 2xl:py-16 bg-gradient-to-br from-gray-800 to-gray-900">
>>>>>>> Stashed changes:frontend/src/Signuppage.js
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to Visvesvaraya Bhawan H-10
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-neutral-600 text-sm max-w-sm mt-2  font-bold dark:text-neutral-300">
            We are happy to see you in NIT KURUKSHETRA
          </p>
        </div>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="full_name"
              className="text-sm font-bold text-neutral-700"
            >
              Full Name
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              placeholder="John Doe"
              value={formData.full_name}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="roll_no"
              className="text-sm font-bold text-neutral-700"
            >
              Roll Number
            </label>
            <input
              id="roll_no"
              name="roll_no"
              type="number"
              placeholder="123456"
              value={formData.roll_no}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="email"
              className="text-sm font-bold text-neutral-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="myprofile@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="password"
              className="text-sm font-bold text-neutral-700"
            >
              Password (min. 8 characters)
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              minLength="8"
              required
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="date_of_joining"
              className="text-sm font-bold text-neutral-700"
            >
              Date of Joining
            </label>
            <input
              id="date_of_joining"
              name="date_of_joining"
              type="date"
              value={formData.date_of_joining}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="profile_pic"
              className="text-sm font-bold text-neutral-700"
            >
              Profile Picture
            </label>
            <input
              className="block w-full mb-5 text-xs text-gray-900 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="profile_pic"
              name="profile_pic"
              type="file"
              accept="image/*"
              value={formData.profile_pic}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label
              htmlFor="room_number"
              className="text-sm font-bold text-neutral-700"
            >
              Room Number
            </label>
            <input
              id="room_number"
              name="room_number"
              type="text"
              placeholder="Room 123"
              value={formData.room_number}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white hover:text-white font-medium py-3 px-6 rounded-md shadow-md transition duration-300 ease-in-out"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
