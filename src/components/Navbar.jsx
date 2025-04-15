import React from 'react';
import Login from './Login';

function Navbar() {
  return (
    <div className="navbar bg-green-600 text-white shadow-sm px-4">
      {/* Start Section - Menu + Title */}
      <div className="flex items-center gap-2 flex-1">
        {/* Hamburger for mobile */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden p-1 min-w-fit text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52"
          >
            <li><a href='/'>Home</a></li>
            <li><a href='/crop'>Crop</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        {/* Title */}
        <a className="btn btn-ghost text-sm font-semibold normal-case truncate text-white">
          FERTILIZER RECOMMENDATION
        </a>
      </div>

      {/* Center Section (visible only on large screens) */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href='/' className="text-white">Home</a></li>
          <li><a href='/crop' className="text-white">Crop</a></li>
          <li><a className="text-white">About</a></li>
          <li><a className="text-white">Contact</a></li>
        </ul>
      </div>

      {/* End Section - Button */}
      <div className="flex-none">
        <a
          className="btn btn-sm bg-white text-green-600 hover:bg-green-100"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Login
        </a>
        <Login />
      </div>
    </div>
  );
}

export default Navbar;
