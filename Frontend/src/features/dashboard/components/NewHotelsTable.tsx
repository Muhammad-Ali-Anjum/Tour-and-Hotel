import { Table } from '../../../components/common/Table';

const data = [
  { name: 'Mountain View Resort', city: 'Skardu', owner: 'Bilal Zaman', rooms: 80 },
  { name: 'Deluxe Hunza Hotel', city: 'Hunza', owner: 'Noor Ahmed', rooms: 60 },
  { name: 'Swat Valley Inn', city: 'Swat', owner: 'Naveed Khan', rooms: 50 },
];

const columns = [
  { header: 'Hotel Name', accessor: 'name' },
  { header: 'City', accessor: 'city' },
  { header: 'Owner', accessor: 'owner' },
  { header: 'Total Rooms', accessor: 'rooms' },
];

export const NewHotelsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">New Hotels</h2>
      <Table data={data} columns={columns} />
      <div className="mt-4 text-right">
        <button className="text-blue-600 hover:underline">View All &gt;</button>
      </div>
    </div>
  );
};