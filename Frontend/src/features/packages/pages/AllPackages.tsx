import { Link } from 'react-router-dom';
import { Table } from '../../../components/common/Table';

const packagesData = [
  { id: 1, name: 'Skardu Explorer', duration: '5 days', price: '$950', status: 'Active' },
  { id: 2, name: 'Hunza Valley Tour', duration: '7 days', price: '$1200', status: 'Active' },
  { id: 3, name: 'Swat Hiking', duration: '3 days', price: '$400', status: 'Inactive' },
];

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Package Name', accessor: 'name' },
  { header: 'Duration', accessor: 'duration' },
  { header: 'Price', accessor: 'price' },
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
    cell: (_, row) => (
      <div className="flex space-x-2">
        <Link to={`/packages/${row.id}`} className="text-blue-600 hover:underline">View</Link>
        <button className="text-green-600 hover:underline">Edit</button>
        <button className="text-red-600 hover:underline">Delete</button>
      </div>
    ),
  },
];

export const AllPackages = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Packages</h1>
        <Link to="/packages/add" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add New Package
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={packagesData} columns={columns} />
      </div>
    </div>
  );
};