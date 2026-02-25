import React from 'react';
import { Booking } from '../../types';
import StatusBadge from '../common/StatusBadge';

interface Props {
  bookings: Booking[];
}

const RecentBookingsTable: React.FC<Props> = ({ bookings }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 flex justify-between items-center border-b">
        <h4 className="font-bold text-slate-800">Recent Bookings</h4>
        <button className="text-blue-600 text-xs font-bold hover:underline">View All &gt;</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-[11px] text-gray-500 uppercase font-bold tracking-wider">
            <tr>
              <th className="px-5 py-3">User</th>
              <th className="px-5 py-3">Type</th>
              <th className="px-5 py-3">Item</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-[13px] text-gray-600">
            {bookings.map((booking, idx) => (
              <tr key={idx}>
                <td className="px-5 py-4 font-bold text-blue-600">{booking.user}</td>
                <td className="px-5 py-4">{booking.type}</td>
                <td className="px-5 py-4 text-gray-400">{booking.item}</td>
                <td className="px-5 py-4">{booking.date}</td>
                <td className="px-5 py-4 text-right">
                  <StatusBadge type={booking.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBookingsTable;