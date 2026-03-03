import { Table } from '../../../components/common/Table';

interface CustomPackageRequest {
  id: number;
  user: string;
  destination: string;
  activities: string;
  estimatedPrice: string;
  status: string;
}

const requests: CustomPackageRequest[] = [
  { id: 1, user: 'Ali Raza', destination: 'Skardu', activities: 'Luxury Hotel', estimatedPrice: '$950', status: 'Pending' },
  { id: 2, user: 'Hamza Ahmed', destination: 'Hunza', activities: 'Hunza', estimatedPrice: '$1,050', status: 'Pending' },
  { id: 3, user: 'Sara Khan', destination: 'Swat', activities: 'Swat, Narah', estimatedPrice: '$800', status: 'Approved' },
];

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'User', accessor: 'user' },
  { header: 'Destination', accessor: 'destination' },
  { header: 'Activities', accessor: 'activities' },
  { header: 'Est. Price', accessor: 'estimatedPrice' },
  {
    header: 'Status',
    accessor: 'status',
    cell: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        value === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
      }`}>{value}</span>
    ),
  },
  {
    header: 'Actions',
    accessor: 'id',
   
    cell: (_value: number, _row: CustomPackageRequest) => (
  <div className="flex space-x-2">
    <button className="text-blue-600 hover:underline">View</button>
    <button className="text-green-600 hover:underline">Approve</button>
    <button className="text-red-600 hover:underline">Reject</button>
  </div>
),
  },
];

export const CustomPackageRequests = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Custom Package Requests</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={requests} columns={columns} />
      </div>
    </div>
  );
};