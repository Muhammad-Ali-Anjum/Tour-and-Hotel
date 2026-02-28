import { useParams } from 'react-router-dom';

export const UserProfile = () => {
  const { id } = useParams();
  // Mock user data
  const user = { id, name: 'Ahmed Khan', email: 'ahmed@example.com', role: 'Customer', status: 'Active' };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Status:</strong> {user.status}</p>
    </div>
  );
};