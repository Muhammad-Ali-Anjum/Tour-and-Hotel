import React from 'react';
import { StatsGrid } from './components/StatsGrid';
import { RecentBookingsTable } from './components/RecentBookingsTable';
import { NewHotelsTable } from './components/NewHotelsTable';
import { PendingPackagesTable } from './components/PendingPackagesTable';
import { ContactMessagesTable } from './components/ContactMessagesTable';

export const DashboardPage: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <StatsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentBookingsTable />
        <NewHotelsTable />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PendingPackagesTable />
        <ContactMessagesTable />
      </div>
    </div>
  );
};