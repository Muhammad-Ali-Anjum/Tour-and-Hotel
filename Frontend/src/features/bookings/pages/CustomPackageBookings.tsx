import { Table } from '../../../components/common/Table';

const bookings = [
  { id: 1, user: 'Ali', package: 'Custom Skardu', date: '2024-06-01', status: 'Pending' },
];

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'User', accessor: 'user' },
  { header: 'Package', accessor: 'package' },
  { header: 'Date', accessor: 'date' },
  { header: 'Status', accessor: 'status' },
  { header: 'Actions', accessor: 'id', cell: () => <button className="text-blue-600">View</button> },
];

export const CustomPackageBookings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Custom Package Bookings</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={bookings} columns={columns} />
      </div>
    </div>
  );
};