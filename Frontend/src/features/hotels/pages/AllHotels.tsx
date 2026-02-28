import { Link } from 'react-router-dom';
import { Table } from '../../../components/common/Table';
import type { Hotel } from '../types';

const hotels: Hotel[] = [
  { id: 1, name: 'Mountain View Resort', city: 'Skardu', owner: 'Bilal Zaman', totalRooms: 80, status: 'Active' },
  { id: 2, name: 'Deluxe Hunza Hotel', city: 'Hunza', owner: 'Noor Ahmed', totalRooms: 60, status: 'Active' },
  { id: 3, name: 'Swat Valley Inn', city: 'Swat', owner: 'Naveed Khan', totalRooms: 50, status: 'Inactive' },
];

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Hotel Name', accessor: 'name' },
  { header: 'City', accessor: 'city' },
  { header: 'Owner', accessor: 'owner' },
  { header: 'Total Rooms', accessor: 'totalRooms' },
  {
    header: 'Status',
    accessor: 'status',
    cell: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
      }`}>
        {value}
      </span>
    ),
  },
  {
    header: 'Actions',
    accessor: 'id',
    cell: (_value: number, row: Hotel) => (
      <div className="flex space-x-2">
        <Link to={`/hotels/${row.id}`} className="text-blue-600 hover:underline">View</Link>
        <Link to={`/hotels/${row.id}/rooms`} className="text-green-600 hover:underline">Rooms</Link>
        <button className="text-red-600 hover:underline">Delete</button>
      </div>
    ),
  },
];

export const AllHotels = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Hotels</h1>
        <Link to="/hotels/add" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add New Hotel
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={hotels} columns={columns} />
      </div>
    </div>
  );
};