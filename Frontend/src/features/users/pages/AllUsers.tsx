import { Table } from '../../../components/common/Table';
import type { User } from '../types'; // if you have a User type defined; otherwise define locally

// If you don't have a User type yet, uncomment this interface:
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: string;
//   status: string;
// }

const users: User[] = [
  { id: 1, name: 'Ahmed Khan', email: 'ahmed@example.com', role: 'Customer', status: 'Active' },
  { id: 2, name: 'Admin User', email: 'admin@example.com', role: 'Admin', status: 'Active' },
];

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Name', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
  { header: 'Role', accessor: 'role' },
  { header: 'Status', accessor: 'status' },
  {
    header: 'Actions',
    accessor: 'id',
    cell: (_value: number, row: User) => (
      <div className="flex space-x-2">
        <button className="text-blue-600 hover:underline">View Profile</button>
        {row.status === 'Active' ? (
          <button className="text-red-600 hover:underline">Block</button>
        ) : (
          <button className="text-green-600 hover:underline">Unblock</button>
        )}
      </div>
    ),
  },
];

export const AllUsers = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={users} columns={columns} />
      </div>
    </div>
  );
};