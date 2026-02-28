import { Table } from '../../../components/common/Table';

const messages = [
  { id: 1, user: 'Abdullah', email: 'abdullah@example.com', date: '2024-05-10', status: 'Unresolved' },
];

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'User', accessor: 'user' },
  { header: 'Email', accessor: 'email' },
  { header: 'Date', accessor: 'date' },
  { header: 'Status', accessor: 'status' },
  {
    header: 'Actions',
    accessor: 'id',
    cell: (_, row) => (
      <button className="text-blue-600 hover:underline">View</button>
    ),
  },
];

export const AllMessages = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={messages} columns={columns} />
      </div>
    </div>
  );
};