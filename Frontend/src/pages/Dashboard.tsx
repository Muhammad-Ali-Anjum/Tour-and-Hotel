import MetricCard from '../components/MetricCard';
import DataTable from '../components/DataTable';
import {
  stats,
  recentBookings,
  newHotels,
  pendingPackages,
  contactMessages,
} from '../data/mockData';

import type { StatusType } from '../types';

// Helper to render status badge
const StatusBadge = ({ status }: { status: StatusType }) => {
  const colors: Record<StatusType, string> = {
    Confirmed: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Cancelled: 'bg-red-100 text-red-800',
    Uncalled: 'bg-blue-100 text-blue-800',
    Annulled: 'bg-purple-100 text-purple-800',
  };
  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${colors[status]}`}>
      {status}
    </span>
  );
};

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <MetricCard key={i} {...stat} />
        ))}
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex justify-between items-center px-5 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Recent Bookings</h2>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              View All &gt;
            </a>
          </div>
          <DataTable
            headers={['User', 'Type', 'Item', 'Date', 'Status']}
            rows={recentBookings}
            renderRow={(r) => (
              <>
                <td className="px-4 py-3 text-sm text-gray-700">{r.user}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.type}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.item}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.date}</td>
                <td className="px-4 py-3 text-sm">
                  <StatusBadge status={r.status} />
                </td>
              </>
            )}
          />
        </div>

        {/* New Hotels */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex justify-between items-center px-5 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">New Hotels</h2>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              View All &gt;
            </a>
          </div>
          <DataTable
            headers={['Hotel Name', 'City', 'Owner', 'Total Rooms']}
            rows={newHotels}
            renderRow={(r) => (
              <>
                <td className="px-4 py-3 text-sm text-gray-700">{r.name}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.city}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.owner}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.rooms}</td>
              </>
            )}
          />
        </div>

        {/* Pending Customer Packages */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex justify-between items-center px-5 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Pending Customer Packages</h2>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              View All &gt;
            </a>
          </div>
          <DataTable
            headers={['User', 'Destination', 'Activities', 'Est. Price']}
            rows={pendingPackages}
            renderRow={(r) => (
              <>
                <td className="px-4 py-3 text-sm text-gray-700">{r.user}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.destination}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.activities}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.price}</td>
              </>
            )}
          />
        </div>

        {/* New Contact Messages */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex justify-between items-center px-5 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">New Contact Messages</h2>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              View All &gt;
            </a>
          </div>
          <DataTable
            headers={['User', 'Email', 'Date', 'Status']}
            rows={contactMessages}
            renderRow={(r) => (
              <>
                <td className="px-4 py-3 text-sm text-gray-700">{r.user}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.email}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{r.date}</td>
                <td className="px-4 py-3 text-sm">
                  <StatusBadge status={r.status} />
                </td>
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
}