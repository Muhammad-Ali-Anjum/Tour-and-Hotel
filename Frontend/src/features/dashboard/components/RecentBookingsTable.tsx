import { Table } from '../../../components/common/Table';

const data = [
  { user: 'Ahmed Khan', type: 'Luxury Skardu Tour', item: 'Deluxe Hotel', date: '2024-05-12', status: 'Confirmed' },
  { user: 'Sarah Ali', type: 'Mike Hotel Room', item: 'Luxury Car', date: '2024-05-10', status: 'Pending' },
  { user: 'John Doe', type: 'Swat, Narah', item: 'Hiking Camping', date: '2024-05-16', status: 'Cancelled' },
  { user: 'Emma White', type: 'Economy Room', item: 'Economy Room', date: '2024-05-01', status: 'Confirmed' },
];

const columns = [
  { header: 'User', accessor: 'user' },
  { header: 'Type', accessor: 'type' },
  { header: 'Item', accessor: 'item' },
  { header: 'Date', accessor: 'date' },
  {
    header: 'Status',
    accessor: 'status',
    cell: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        value === 'Confirmed' ? 'bg-green-100 text-green-800' :
        value === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {value}
      </span>
    ),
  },
];

export const RecentBookingsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
      <Table data={data} columns={columns} />
      <div className="mt-4 text-right">
        <button className="text-blue-600 hover:underline">View All &gt;</button>
      </div>
    </div>
  );
};