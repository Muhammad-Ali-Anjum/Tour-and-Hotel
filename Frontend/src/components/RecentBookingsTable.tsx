import React from 'react';
import { Booking } from '../../../types';

// Sample data (replace with actual data from API)
const sampleBookings: Booking[] = [
  { id: '1', user: 'Ahmed Khan', type: 'Luxury Skardu Tour', item: 'Deluxe Hotel', date: '2024-05-12', status: 'Confirmed' },
  { id: '2', user: 'Sarah Ali', type: 'Mike Hotel Room', item: 'Luxury Car', date: '2024-05-10', status: 'Pending' },
  { id: '3', user: 'John Doe', type: 'Swat, Narah', item: 'Hiking Camping', date: '2024-05-16', status: 'Cancelled' },
  { id: '4', user: 'Emma White', type: 'Economy Room', item: 'Economy Room', date: '2024-05-01', status: 'Confirmed' },
];

export const RecentBookingsTable: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sampleBookings.map((booking) => (
            <tr key={booking.id}>
              <td className="px-6 py-4 whitespace-nowrap">{booking.user}</td>
              <td className="px-6 py-4 whitespace-nowrap">{booking.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{booking.item}</td>
              <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
                      booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'}`}
                >
                  {booking.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};