import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and backend call here

    // For now, just navigate to the login page after successful signup
    console.log('User signed up:', formData);
    navigate('/login'); // Navigate to login page after signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">Create an Account</h2>
        
        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name} 
              onChange={handleInputChange} 
              placeholder="Your Name" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" 
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleInputChange} 
              placeholder="you@example.com" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" 
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password} 
              onChange={handleInputChange} 
              placeholder="********" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" 
            />
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition">
            Sign Up
          </button>
        </form>

        {/* Already have an account? */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account? 
          <a href="/login" className="ml-2 text-pink-500 hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;

