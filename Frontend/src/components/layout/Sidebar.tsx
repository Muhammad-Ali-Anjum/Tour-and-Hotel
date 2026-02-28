import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes, type RouteConfig } from '../../routes';
import { 
  FiHome, 
  FiPackage, 
  FiGrid, 
  FiBookOpen, 
  FiMap, 
  FiTruck, 
  FiUsers, 
  FiStar, 
  FiMessageSquare, 
  FiSettings
} from 'react-icons/fi';

// Map route labels to icons (add more as needed)
const iconMap: Record<string, React.ElementType> = {
  'Dashboard': FiHome,
  'Packages': FiPackage,
  'Custom Packages': FiGrid,
  'Bookings': FiBookOpen,
  'Hotels': FiMap,
  'Cars': FiTruck,
  'Users': FiUsers,
  'Reviews': FiStar,
  'Inquiries': FiMessageSquare,
  'Settings': FiSettings,
  // Add other mappings as needed
};

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col h-screen">
      {/* Logo / Header */}
      <div className="p-5 border-b flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
          A
        </div>
        <span className="font-bold text-xl text-gray-800">Admin Panel</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3">
        {routes.map((route: RouteConfig) => {
          const Icon = iconMap[route.label] || FiHome; // fallback icon
          return (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg my-1 transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">{route.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Optional footer */}
      <div className="p-4 border-t text-xs text-gray-500 text-center">
        v1.0.0
      </div>
    </aside>
  );
};