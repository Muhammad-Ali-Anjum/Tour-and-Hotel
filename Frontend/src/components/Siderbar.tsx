// import React from "react";

const Sidebar = () => {
  const menuItems = [
    "Dashboard",
    "Packages",
    "Custom Packages",
    "Bookings",
    "Hotels",
    "Cars",
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin</h1>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <a
            key={item}
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;