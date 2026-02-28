import { Table } from '../../../components/common/Table';

const bookings = [
  { id: 1, user: 'Ahmed Khan', package: 'Skardu Explorer', date: '2024-05-12', status: 'Confirmed', payment: 'Paid' },
  { id: 2, user: 'Sarah Ali', package: 'Hunza Valley Tour', date: '2024-05-10', status: 'Pending', payment: 'Unpaid' },
];

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'User', accessor: 'user' },
  { header: 'Package', accessor: 'package' },
  { header: 'Date', accessor: 'date' },
  { header: 'Status', accessor: 'status' },
  { header: 'Payment', accessor: 'payment' },
  {
    header: 'Actions',
    accessor: 'id',
    cell: (_, row) => (
      <div className="flex space-x-2">
        <button className="text-blue-600 hover:underline">Update Status</button>
        <button className="text-green-600 hover:underline">Update Payment</button>
      </div>
    ),
  },
];

export const PackageBookings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Package Bookings</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={bookings} columns={columns} />
      </div>
    </div>
  );
};