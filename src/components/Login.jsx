import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  // Function to handle signup button click
  const handleSignupClick = (e) => {
    e.preventDefault(); // Prevent form submission
    const modal = document.getElementById("my_modal_3");
    modal.close(); // Close the login modal
    navigate("/signup"); // Navigate to the signup page
  };

  // Function to handle login button click
  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent form submission (to avoid page reload)
    const modal = document.getElementById("my_modal_3");
    modal.close(); // Close the login modal
    navigate("/dashboard"); // Navigate to dashboard after successful login (this is an example)
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box w-full max-w-sm mx-auto p-6">
        
        {/* Close Button */}
        <form method="dialog">
          <button className="text-black btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>

        {/* Title */}
        <h3 className="font-bold text-black text-xl text-center mb-4">Create Account</h3>

        {/* Login Form */}
        <form className="flex flex-col gap-4">
          
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email ID"
            className="input input-bordered w-full"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />

          {/* Login Button */}
          <button
            className="btn bg-pink-500 hover:bg-pink-600 text-white w-full"
            onClick={handleLoginClick} // Handle login click
          >
            Login
          </button>

          {/* Bottom text */}
          <div className="text-sm mt-2 text-left">
            <span className="text-black">Not registered? </span>
            {/* Signup Link */}
            <button
              className="text-blue-600 hover:underline"
              onClick={handleSignupClick} // Handle signup click
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;










