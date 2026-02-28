import { useParams } from 'react-router-dom';

export const MessageDetails = () => {
  const { id } = useParams();
  const message = {
    id,
    user: 'Abdullah',
    email: 'abdullah@example.com',
    message: 'I need help with my booking.',
    date: '2024-05-10',
    status: 'Unresolved',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Message #{id}</h1>
      <p><strong>From:</strong> {message.user} ({message.email})</p>
      <p><strong>Date:</strong> {message.date}</p>
      <p><strong>Message:</strong> {message.message}</p>
      <p><strong>Status:</strong> {message.status}</p>
      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Mark as Resolved</button>
    </div>
  );
};