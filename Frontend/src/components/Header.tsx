// import React from "react";
import { BellIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="Frontend/src/assets/LOGOf.jpg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="absolute right-3 top-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
            3
          </span>
        </div>
        <BellIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;