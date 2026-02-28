import { Table } from '../../../components/common/Table';

const bookings = [
  { id: 1, renter: 'Ahmed Khan', car: 'Toyota Corolla', start: '2024-06-01', end: '2024-06-05', status: 'Confirmed' },
  { id: 2, renter: 'Sara Ali', car: 'Honda Civic', start: '2024-06-10', end: '2024-06-12', status: 'Pending' },
];

const columns = [
  { header: 'Booking ID', accessor: 'id' },
  { header: 'Renter', accessor: 'renter' },
  { header: 'Car', accessor: 'car' },
  { header: 'Start Date', accessor: 'start' },
  { header: 'End Date', accessor: 'end' },
  { header: 'Status', accessor: 'status' },
  {
    header: 'Actions',
    accessor: 'id',
    cell: () => <button className="text-blue-600 hover:underline">View</button>,
  },
];

export const CarBookings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Car Bookings</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={bookings} columns={columns} />
      </div>
    </div>
  );
};