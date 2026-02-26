// import React from 'react';
// import Sidebar from '../components/layout/Sidebar';
// import Header from '../components/layout/Header';
// import StatCard from '../components/common/StatCard';
// import RecentBookingsTable from '../components/tables/RecentBookingsTables';
// import NewHotelsTable from '../components/tables/NewHotelsTable';
// import PendingPackagesTable from '../components/tables/PendingPackagesTable';
// import ContactMessagesTable from '../components/tables/ContactMessageTable';
// import { statsData, recentBookings, newHotels, pendingPackages, contactMessages } from '../data/mockData';

// const Dashboard: React.FC = () => {
//   // Split stats into two rows (4 each)
//   const firstRowStats = statsData.slice(0, 4);
//   const secondRowStats = statsData.slice(4, 8);

//   return (
//     <div className="flex min-h-screen bg-[#F7FAFC]">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <div className="p-8 overflow-y-auto">
//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {firstRowStats.map((stat, idx) => (
//               <StatCard key={idx} {...stat} />
//             ))}
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//             {secondRowStats.map((stat, idx) => (
//               <StatCard key={idx} {...stat} />
//             ))}
//           </div>

//           {/* Tables Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
//             <RecentBookingsTable bookings={recentBookings} />
//             <NewHotelsTable hotels={newHotels} />
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
//             <PendingPackagesTable packages={pendingPackages} />
//             <ContactMessagesTable messages={contactMessages} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import { useState } from "react";
import { Link } from "react-router-dom";
import StatCard from "../components/statCard";
import Tabs from "../components/Tabs";
import RecentBookingsTable from "../components/RecentBookingsTable";
import NewHotelsTable from "../components/NewHotelsTable";
import PendingPackagesTable from "../components/PendingPackagesTable";
import ContactMessagesTable from "../components/ContactMessagesTable";
import { stats } from "../data/mockData";

const tabs = ["Dashboard", "Packages", "Custom Packages", "Bookings", "Hotels", "Cars"];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Determine if sub‑button should be shown (for Hotels or Cars)
  const showSubButton = activeTab === "Hotels" || activeTab === "Cars";

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header with search and badge */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute right-3 top-2 bg-red-500 text-white text-xs rounded-full px-1.5">
            3
          </span>
        </div>
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Sub‑button (appears when Hotels or Cars is active) */}
      {showSubButton && (
        <div className="mb-6">
          <Link
            to={`/${activeTab.toLowerCase()}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            Manage {activeTab}
          </Link>
        </div>
      )}

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Users" value={stats.totalUsers} sub1="Users" sub2="Active Users" />
        <StatCard title="Total Bookings" value={stats.totalBookings} sub1="Bookings" sub2="This Month" />
        <StatCard title="Total Hotels" value={stats.totalHotels} sub1="Hotels" sub2="Active Hotels" />
        <StatCard title="Total Cars" value={stats.totalCars} sub1="Cars" sub2="Available Cars" />
        <StatCard title="Total Packages" value={stats.totalPackages} sub1="Packages" sub2="Active Packages" />
        <StatCard title="Pending Reviews" value={stats.pendingReviews} sub1="Reviews" sub2="New Reviews" />
        <StatCard title="New Hotels" value={stats.newHotels} sub1="Hotels" sub2="New Hotels" />
        <StatCard
          title="Revenue (This Month)"
          value={`$${stats.revenue.toLocaleString()}`}
          sub1="Revenue"
          sub2="This Month"
        />
      </div>

      {/* Recent Bookings & New Hotels side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <RecentBookingsTable />
        <NewHotelsTable />
      </div>

      {/* Pending Packages & Contact Messages side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <PendingPackagesTable />
        <ContactMessagesTable />
      </div>

      {/* View All link */}
      <div className="text-right mt-2">
        <Link to="/all" className="text-blue-600 hover:underline text-sm">
          View All &gt;
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;