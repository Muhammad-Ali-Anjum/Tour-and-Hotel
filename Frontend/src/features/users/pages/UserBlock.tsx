import { useParams } from 'react-router-dom';
import { useState } from 'react';

export const UserBlock = () => {
  const { id } = useParams();
  const [blocked, setBlocked] = useState(false);

  const toggleBlock = () => {
    // API call
    setBlocked(!blocked);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md">
      <h1 className="text-2xl font-bold mb-4">Manage User #{id}</h1>
      <p>Current status: {blocked ? 'Blocked' : 'Active'}</p>
      <button onClick={toggleBlock} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">
        {blocked ? 'Unblock' : 'Block'} User
      </button>
    </div>
  );
};