

import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { routes } from '../routes';

export const DashboardLayout = () => {
  const [search, setSearch] = useState('');
  const tabs = ['Dashboard', 'Packages', 'Custom Packages', 'Bookings', 'Hotels', 'Cars'];

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 font-bold text-xl border-b">Admin Panel</div>
        <nav className="p-2">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md my-1 ${
                  isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                }`
              }
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded-md pl-8 pr-4 py-2"
              />
              <span className="absolute left-2 top-2.5 text-gray-400">🔍</span>
            </div>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">3</span>
          </div>
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button key={tab} className="px-3 py-1 text-sm rounded-md hover:bg-gray-200">
                {tab}
              </button>
            ))}
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};