import React from 'react';

function Login() {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box w-full max-w-sm mx-auto p-6">
        
        {/* Close Button */}
        <form method="dialog">
          <button className=" text-black btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>

        {/* Title */}
        <h3 className="font-bold  text-black text-xl text-center mb-4">Create Account</h3>

        {/* Login Form */}
        <form className="flex flex-col gap-4">
          
          {/* Name */}
          <input
            type="text"
            text color='black'
            placeholder="Full Name"
            className="input input-bordered w-full"
          />

          {/* Email */}
          <input
            text color='black'
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
          <button className="btn bg-pink-500 hover:bg-pink-600 text-white w-full">
            Login
          </button>

          {/* Bottom text */}
          <div className="text-sm mt-2 text-left">
            <span className="text-black">Not registered? </span>
            <a href="#" className="text-blue-600 hover:underline">
              Signup
            </a>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;



