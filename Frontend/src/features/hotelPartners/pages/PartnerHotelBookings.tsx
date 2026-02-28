import { useParams } from 'react-router-dom';
import { Table } from '../../../components/common/Table';

const bookings = []; // mock data

export const PartnerHotelBookings = () => {
  const { partnerId, hotelId } = useParams();
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Bookings for Hotel {hotelId} (Partner {partnerId})</h1>
      <Table data={bookings} columns={[{ header: 'ID', accessor: 'id' }]} />
    </div>
  );
};