import { Table } from '../../../components/common/Table';

// Define a type for contact messages
interface ContactMessage {
  id: number;
  user: string;
  email: string;
  date: string;
  status: string;
}

const messages: ContactMessage[] = [
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
    // Explicitly type parameters; prefix unused parameter with underscore
    cell: (_value: number, _row: ContactMessage) => (
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