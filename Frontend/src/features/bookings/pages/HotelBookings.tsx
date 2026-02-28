import { Table } from '../../../components/common/Table';

// Define a type for a hotel booking
interface HotelBooking {
  id: number;
  guest: string;
  hotel: string;
  checkIn: string;
  checkOut: string;
  status: string;
}

// Now type the bookings array
const bookings: HotelBooking[] = [
  { id: 1, guest: 'Ahmed Khan', hotel: 'Mountain View Resort', checkIn: '2024-06-01', checkOut: '2024-06-05', status: 'Confirmed' },
  { id: 2, guest: 'Sarah Ali', hotel: 'Deluxe Hunza Hotel', checkIn: '2024-06-10', checkOut: '2024-06-15', status: 'Pending' },
  { id: 3, guest: 'John Doe', hotel: 'Swat Valley Inn', checkIn: '2024-05-20', checkOut: '2024-05-25', status: 'Cancelled' },
];

const columns = [
  { header: 'Booking ID', accessor: 'id' },
  { header: 'Guest', accessor: 'guest' },
  { header: 'Hotel', accessor: 'hotel' },
  { header: 'Check-In', accessor: 'checkIn' },
  { header: 'Check-Out', accessor: 'checkOut' },
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
  {
    header: 'Actions',
    accessor: 'id',
    // Explicitly type the parameters
    cell: (_value: number, _row: HotelBooking) => (
      <div className="flex space-x-2">
        <button className="text-blue-600 hover:underline">Update Status</button>
        <button className="text-green-600 hover:underline">Payment</button>
      </div>
    ),
  },
];

export const HotelBookings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Hotel Bookings</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={bookings} columns={columns} />
      </div>
    </div>
  );
};