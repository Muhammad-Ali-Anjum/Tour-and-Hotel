import React from 'react';

export const BookingFilters: React.FC = () => {
  return (
    <div className="flex space-x-2 mb-4">
      <input type="text" placeholder="Search..." className="border rounded px-3 py-2" />
      <select className="border rounded px-3 py-2">
        <option>All Statuses</option>
        <option>Confirmed</option>
        <option>Pending</option>
        <option>Cancelled</option>
      </select>
    </div>
  );
};