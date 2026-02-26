import { recentBookings } from "../data/mockData";

const RecentBookingsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
      <h2 className="text-lg font-semibold mb-3">Recent Bookings</h2>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">User</th>
            <th className="text-left">Type</th>
            <th className="text-left">Item</th>
            <th className="text-left">Date</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentBookings.map((booking, idx) => (
            <tr key={idx} className="border-b last:border-0">
              <td className="py-2">{booking.user}</td>
              <td>{booking.type}</td>
              <td>{booking.item}</td>
              <td>{booking.date}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    booking.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : booking.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
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

export default RecentBookingsTable;