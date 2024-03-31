import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    if (password !== confirmPassword) {
      setError("Passwords don't match");
    } else {
      setError('');
      // Call your signup API here with email and password
      console.log('Signup:', email, password);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create an account</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded mt-1" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 border rounded mt-1" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
            <input type="password" id="confirmPassword" className="w-full px-3 py-2 border rounded mt-1" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Sign Up</button>
        </form>
        <p className="text-gray-600 mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link></p>
      </div>
    </div>
  );
}

export default Signup;
