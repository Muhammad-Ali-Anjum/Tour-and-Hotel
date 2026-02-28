import { useParams } from 'react-router-dom';
import { Table } from '../../../components/common/Table';

const bookings = [
  { id: 1, guest: 'Ahmed Khan', checkIn: '2024-06-01', checkOut: '2024-06-05', status: 'Confirmed' },
];

const columns = [
  { header: 'Booking ID', accessor: 'id' },
  { header: 'Guest', accessor: 'guest' },
  { header: 'Check-In', accessor: 'checkIn' },
  { header: 'Check-Out', accessor: 'checkOut' },
  { header: 'Status', accessor: 'status' },
];

export const HotelBookingMonitoring = () => {
  const { hotelId } = useParams();
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Booking Monitoring for Hotel #{hotelId}</h1>
      <Table data={bookings} columns={columns} />
    </div>
  );
};