import { Table } from '../../../components/common/Table';

const data = [
  { user: 'Abdullah', email: 'abdullah@example.com', date: '2024-05-10', status: 'Uncalled' },
  { user: 'Emily White', email: 'emily@example.com', date: '2024-05-09', status: 'Annulled' },
  { user: 'Farhan Ali', email: 'farhan@example.com', date: '2024-05-06', status: 'Uncalled' },
];

const columns = [
  { header: 'User', accessor: 'user' },
  { header: 'Email', accessor: 'email' },
  { header: 'Date', accessor: 'date' },
  {
    header: 'Status',
    accessor: 'status',
    cell: (value: string) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        value === 'Uncalled' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
      }`}>
        {value}
      </span>
    ),
  },
];

export const ContactMessagesTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">New Contact Messages</h2>
      <Table data={data} columns={columns} />
      <div className="mt-4 text-right">
        <button className="text-blue-600 hover:underline">View All &gt;</button>
      </div>
    </div>
  );
};