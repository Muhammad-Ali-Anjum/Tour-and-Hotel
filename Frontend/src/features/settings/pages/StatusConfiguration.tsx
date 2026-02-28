import { useState } from 'react';

export const StatusConfiguration = () => {
  const [statuses, _setStatuses] = useState(['Pending', 'Confirmed', 'Cancelled']);

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Booking Status Configuration</h1>
      <ul className="list-disc pl-5">
        {statuses.map(s => <li key={s}>{s}</li>)}
      </ul>
    </div>
  );
};