import React from 'react';

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">Create an Account</h2>
        
        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" placeholder="********" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
        </div>

        {/* Sign Up Button */}
        <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition">Sign Up</button>

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
