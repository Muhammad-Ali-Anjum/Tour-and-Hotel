import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import StatCard from '../components/common/StatCard';
import RecentBookingsTable from '../components/tables/RecentBookingsTables';
import NewHotelsTable from '../components/tables/NewHotelsTable';
import PendingPackagesTable from '../components/tables/PendingPackagesTable';
import ContactMessagesTable from '../components/tables/ContactMessageTable';
import { statsData, recentBookings, newHotels, pendingPackages, contactMessages } from '../data/mockData';

const Dashboard: React.FC = () => {
  // Split stats into two rows (4 each)
  const firstRowStats = statsData.slice(0, 4);
  const secondRowStats = statsData.slice(4, 8);

  return (
    <div className="flex min-h-screen bg-[#F7FAFC]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-8 overflow-y-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {firstRowStats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {secondRowStats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            <RecentBookingsTable bookings={recentBookings} />
            <NewHotelsTable hotels={newHotels} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <PendingPackagesTable packages={pendingPackages} />
            <ContactMessagesTable messages={contactMessages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;