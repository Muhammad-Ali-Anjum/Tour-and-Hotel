import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes/routePaths';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <nav className="space-y-2">
        <NavLink to={ROUTES.DASHBOARD} className="block py-2 px-4 hover:bg-gray-700 rounded">
          Dashboard
        </NavLink>
        <NavLink to={ROUTES.PACKAGES} className="block py-2 px-4 hover:bg-gray-700 rounded">
          Packages
        </NavLink>
        {/* Add other links similarly */}
      </nav>
    </aside>
  );
};