
import { Link } from 'react-router-dom';
import { Table } from '../../../components/common/Table';

interface Car {
  id: number;
  model: string;
  plate: string;
  owner: string;
  status: string;
}

const cars: Car[] = [
  { id: 1, model: 'Toyota Corolla', plate: 'ABC-123', owner: 'John Doe', status: 'Available' },
  { id: 2, model: 'Honda Civic', plate: 'XYZ-789', owner: 'Jane Smith', status: 'Booked' },
];

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Model', accessor: 'model' },
  { header: 'Plate', accessor: 'plate' },
  { header: 'Owner', accessor: 'owner' },
  { header: 'Status', accessor: 'status' },
  {
    header: 'Actions',
    accessor: 'id',
    cell: (_value: number, row: Car) => (
      <div className="flex space-x-2">
        <Link to={`/cars/${row.id}`} className="text-blue-600 hover:underline">View</Link>
        <Link to={`/cars/${row.id}/availability`} className="text-green-600 hover:underline">Availability</Link>
      </div>
    ),
  },
];

export const AllCars = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Cars</h1>
        <Link to="/cars/add" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add Car</Link>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={cars} columns={columns} />
      </div>
    </div>
  );
};