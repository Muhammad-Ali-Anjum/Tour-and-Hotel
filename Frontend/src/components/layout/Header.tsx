import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white h-16 border-b flex items-center justify-between px-8 shadow-sm">
      <div className="flex items-center">
        <button className="md:hidden mr-4">☰</button>
        <h2 className="text-lg font-bold text-slate-700">Admin Dashboard</h2>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm w-72 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <div className="relative cursor-pointer">
          <Bell className="text-slate-600" size={20} />
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;