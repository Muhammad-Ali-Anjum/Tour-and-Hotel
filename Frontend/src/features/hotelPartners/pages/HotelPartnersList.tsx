import { Table } from '../../../components/common/Table';
import type { HotelPartner } from '../types';

const partners: HotelPartner[] = [
  {
    id: 1,
    name: 'Bilal Zaman',
    email: 'bilal@example.com',
    hotels: [1, 2],
    status: 'Active',
    permissions: { canEditHotels: true, canViewBookings: true },
  },
  {
    id: 2,
    name: 'Noor Ahmed',
    email: 'noor@example.com',
    hotels: [3],
    status: 'Inactive',
    permissions: { canEditHotels: false, canViewBookings: true },
  },
];

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Name', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
  {
    header: 'Hotels',
    accessor: 'hotels',
    cell: (value: number[]) => value.length,
  },
  { header: 'Status', accessor: 'status' },
  {
    header: 'Actions',
    accessor: 'id',
    cell: (_value: number, _row: HotelPartner) => (
      <div className="flex space-x-2">
        <button className="text-blue-600 hover:underline">View Hotels</button>
        <button className="text-green-600 hover:underline">Access Control</button>
      </div>
    ),
  },
];

export const HotelPartnersList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Hotel Partners</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={partners} columns={columns} />
      </div>
    </div>
  );
};