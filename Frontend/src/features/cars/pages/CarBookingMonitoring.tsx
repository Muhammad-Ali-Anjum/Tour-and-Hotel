import { useParams } from 'react-router-dom';
import { Table } from '../../../components/common/Table';

const bookings = [
  { id: 1, renter: 'Ahmed', start: '2024-06-01', end: '2024-06-05', status: 'Confirmed' },
];

const columns = [
  { header: 'Booking ID', accessor: 'id' },
  { header: 'Renter', accessor: 'renter' },
  { header: 'Start Date', accessor: 'start' },
  { header: 'End Date', accessor: 'end' },
  { header: 'Status', accessor: 'status' },
];

export const CarBookingMonitoring = () => {
  const { carId } = useParams();
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Booking Monitoring for Car #{carId}</h1>
      <Table data={bookings} columns={columns} />
    </div>
  );
};