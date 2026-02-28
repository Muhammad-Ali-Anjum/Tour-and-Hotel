import { useParams } from 'react-router-dom';
import { Table } from '../../../components/common/Table';

// Define the shape of a booking (adjust fields as needed)
interface PartnerHotelBooking {
  id: number;
  guestName: string;
  checkIn: string;
  checkOut: string;
  status: string;
}

// Now type the array explicitly
const bookings: PartnerHotelBooking[] = [];

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Guest', accessor: 'guestName' },
  { header: 'Check-In', accessor: 'checkIn' },
  { header: 'Check-Out', accessor: 'checkOut' },
  { header: 'Status', accessor: 'status' },
];

export const PartnerHotelBookings = () => {
  const { partnerId, hotelId } = useParams();
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Bookings for Hotel {hotelId} (Partner {partnerId})</h1>
      <Table data={bookings} columns={columns} />
    </div>
  );
};