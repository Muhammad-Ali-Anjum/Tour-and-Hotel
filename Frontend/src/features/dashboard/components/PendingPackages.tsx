import { Table } from '../../../components/common/Table';

const data = [
  { user: 'Ali Raza', destination: 'Skardu', activities: 'Luxury Hotel', price: '$950' },
  { user: 'Hamza Ahmed', destination: 'Hunza', activities: 'Hunza', price: '$1,050' },
  { user: 'Sara Khan', destination: 'Swat', activities: 'Swat, Narah', price: '$800' },
];

const columns = [
  { header: 'User', accessor: 'user' },
  { header: 'Destination', accessor: 'destination' },
  { header: 'Activities', accessor: 'activities' },
  { header: 'Estimated Price', accessor: 'price' },
];

export const PendingPackagesTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Pending Customer Packages</h2>
      <Table data={data} columns={columns} />
      <div className="mt-4 text-right">
        <button className="text-blue-600 hover:underline">View All &gt;</button>
      </div>
    </div>
  );
};