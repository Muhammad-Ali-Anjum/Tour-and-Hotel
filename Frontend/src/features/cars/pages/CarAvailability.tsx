

import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const CarAvailability = () => {
  const { carId } = useParams();
  const [available, setAvailable] = useState(true);

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md">
      <h1 className="text-2xl font-bold mb-4">Set Availability for Car #{carId}</h1>
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={available} onChange={e => setAvailable(e.target.checked)} />
          <span>Available for booking</span>
        </label>
      </div>
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
    </div>
  );
};